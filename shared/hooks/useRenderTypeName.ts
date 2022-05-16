import { useRouter } from "next/router";

export const useRenderTypeName = () => {
  let { pathname } = useRouter();

  switch (pathname) {
    case "/article":
      return "məqalə";
    case "/video":
      return "video";
    default:
      return "xəbər";
  }
};
