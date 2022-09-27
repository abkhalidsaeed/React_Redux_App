import http from "../http-common";

const register = (username, email, password) => {
  return http.post("/signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return http
    .post("/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.getItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default { register, login, logout };
