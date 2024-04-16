import { mock } from "utils/net";

export async function login(userinfo) {
  return mock
    .post("/login", userinfo)
    .then((resp) => resp.data)
    .catch((e) => console.log(e));
}
