import { toast } from "react-toastify";
import { METHOD } from "shared/constant/method";
import { Axios } from "../utils/axios";

export const serverSideRequest = async (url: string) => {
  try {
    return await Axios({ url, method: METHOD.GET });
  } catch ({ message }) {
    toast.error(message);
  }
};
