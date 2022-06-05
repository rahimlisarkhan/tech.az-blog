import { ROUTER } from "shared/constant/route";

import { toast } from "react-toastify";
import { fillUserInfo } from "shared/store/slices/user/userSlices";
import { fillToken } from "shared/utils/fillToken";
import { parseUser } from "shared/utils/parseUser";
import { UserData } from "types/user";

import { useRouter } from "next/router";
import { useDispatch } from "./useDispatch";
import { useGoogleSignIn } from "./useGoogleSignIn";
import { useRequest } from "./useRequest";

import { apiUserProfile } from "api/profile";
import { apiLogin, apiRegister } from "api/login";
import { useEffect } from "react";

interface AccountType {
  listenSuccess: (data: any) => void | undefined;
  listenError: (err: any) => void | undefined;
}

const defaultAccount = {
  listenSuccess: () => {},
  listenError: () => {},
};

export const useAccount = ({
  listenSuccess,
  listenError,
}: AccountType = defaultAccount) => {
  let { push, asPath } = useRouter();

  let isLogin = asPath === ROUTER.LOGIN.href;
  let dispatch = useDispatch();

  const { signUp: googleSignIn, logOut: googleLogout } = useGoogleSignIn({
    onGoogleSuccess(data: any) {
      if (!data) return;
      let user = parseUser(data);
      dispatch(fillUserInfo(user));

      listenSuccess?.(data);
      fillToken(null);
    },
  });

  const { exc: userExc } = useRequest(() => apiUserProfile(), {
    onSuccess(data) {
      dispatch(fillUserInfo(data));
      fillToken(data.token);
    },
  });

  const { exc: defaultSignIn } = useRequest(
    (data) => (isLogin ? apiLogin(data) : apiRegister(data)),
    {
      onSuccess: (user: Partial<UserData>) => {
        if (isLogin) {
          dispatch(fillUserInfo(user));
          listenSuccess?.(user);
          fillToken(user.token);
        }
        push(isLogin ? ROUTER.MENU.HOME.href : ROUTER.LOGIN.href);

        toast.success("Aramıza yenidən xoş gəldin!");
      },
      onError: (err) => {
        listenError(err);
        toast.error("Məlumatların düzgünlüyünü yoxlayın!");
      },
    }
  );

  useEffect(() => {
    userExc();
  }, []);

  return { defaultSignIn, googleSignIn, googleLogout };
};
