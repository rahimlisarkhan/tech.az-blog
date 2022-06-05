import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ROUTER } from "shared/constant/route";
import { stateUser } from "shared/store/slices/user/userSlices";

export const useRedirect = () => {
  const { push } = useRouter();
  const user = useSelector(stateUser);
  const [isAccessPage, setIsAccessPage] = useState<any>(false);

  useEffect(() => {
    if (!user) return;
    push(ROUTER.MENU.HOME.href);
    setIsAccessPage(true);
  }, [user]);

  return { isAccessPage };
};
