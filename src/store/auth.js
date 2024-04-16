import { mock } from "../utils/net";

export const AuthProvider = {
  isAuthenticated: false,
  online: null,
  staffId: null,
  name: null,
  role: null,
  token: null,

  async login(info) {
    return await mock.post("/login", info).then((resp) => {
      let data = resp.data;
      if (data.token !== "") {
        AuthProvider.isAuthenticated = true;
        AuthProvider.online = true;
        AuthProvider.staffId = data.staff_id;
        AuthProvider.name = data.name;
        AuthProvider.role = data.role;
        AuthProvider.token = data.token;
        console.log("curAuthStats: " + JSON.stringify(this));
        localStorage.setItem("__auth", JSON.stringify(this));
        return true;
      }
      return false;
    });
  },

  get() {
    const auth = localStorage.getItem("__auth");
    if (!auth) {
      return null
    }
    return JSON.parse(auth);
  },
};
