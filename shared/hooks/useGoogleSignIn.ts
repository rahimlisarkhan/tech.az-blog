import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ROUTER } from "shared/constant/route";
import { useFirebaseConnect } from "./useFirebaseConnect";

export const useGoogleSignIn = ({ onGoogleSuccess }) => {
  const connect = useFirebaseConnect();
  const googleProvider = new GoogleAuthProvider();
  let { push } = useRouter();

  useEffect(() => {
    if (!connect?.auth) return;

    const unsubscribe = onAuthStateChanged(connect.auth, (data) => {
      onGoogleSuccess?.(data);
    });

    return () => unsubscribe();
  }, [connect?.auth]);

  const logOut: any = async () => {
    onGoogleSuccess?.(null);
    await signOut(connect?.auth);
  };

  const signUp: any = async () => {
    try {
      await signInWithPopup(connect?.auth, googleProvider);
      toast.success("Google hesabınız ilə daxil olundu!");
      push(ROUTER.MENU.HOME.href);
    } catch (err) {
      toast.error("Daxil olarkən xəta baş verdi!");
    }
  };
  return { signUp, logOut };
};
