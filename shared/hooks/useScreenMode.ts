import { useSelector } from "./useSelector";

export const useScreenMode = () => {
  let mode = useSelector((state) => state.home.appMode);

  const colorMode = () => {
    if (mode) {
      return "black";
    }

    return "white";
  };

  return { mode, colorMode };
};
