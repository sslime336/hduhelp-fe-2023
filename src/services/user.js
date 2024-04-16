import { mock } from "utils/net";

async function getUserList() {
  await mock.get("/users").then((resp) => resp.data);
}

async function removeUserById(id) {
  await mock.delete(`/user/${id}`).catch((err) => console.log(err));
}

async function createUser(user) {
  await mock.post("/user", user).catch((err) => console.log(err));
}

async function updateUser(user) {
  await mock.patch(`/user/${user.id}`, user).catch((err) => console.log(err));
}

async function resetUserData() {
  await mock.post("/reset").catch((err) => console.log(err));
}

export { createUser, getUserList, removeUserById, updateUser, resetUserData };
