import {mock} from "../utils/net";

function getUserList() {
  return mock.get('/users').then(resp => resp.data)
}

async function removeUserById(id) {
  await mock.delete(`/user/${id}`).catch(err => console.log(err))
}

async function createUser(user) {
  await mock.post('/user', user).catch(err => console.log(err))
}

function updateUser() {
}

export {getUserList, removeUserById, createUser, updateUser}
