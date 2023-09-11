export const userService = () => {
  const user = JSON.parse(sessionStorage.getItem("data") || "{}");
  if (user !== "") {
    return user;
  }
};
