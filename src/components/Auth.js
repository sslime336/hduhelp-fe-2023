export default function Auth({ children }) {
  return <>{children}</>;
}

export const AuthProvider = {
  isAuthenticated: false,
  name: null,
  role: null,

  async signin({ username, password }) {
    await new Promise((r) => setTimeout(r, 500));
    AuthProvider.isAuthenticated = true;
    AuthProvider.name = username;
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500));
    AuthProvider.isAuthenticated = false;
    AuthProvider.name = "";
  },
};
