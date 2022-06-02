import { UserData } from "types/user";

export const parseUser = (data: any) => {
  let { displayName, email, photoURL, uid } = data;

  let first_name = displayName.split(" ")[0];
  let last_name = displayName.split(" ")[1];

  let user: Partial<UserData> = {
    birthday: null,
    education: null,
    email: email,
    first_name: first_name,
    id: uid,
    image: photoURL,
    last_name: last_name,
    position: null,
    username: displayName,
  };

  return user;
};
