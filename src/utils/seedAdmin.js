export const seedAdmin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const adminExists = users.some(
    (user) => user.role === "admin"
  );

  if (!adminExists) {
    users.push({
      id: 1,
      fullName: "group1",
      email: "group1petfind@gmail.com",
      phone: "+254777000777",
      password: "collaboration",
      role: "admin",
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
};