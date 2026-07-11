export const seedAdmin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const adminExists = users.some(
    (user) => user.role === "admin"
  );

  if (!adminExists) {
    users.push({
      id: 1,
      fullName: "System Administrator",
      email: "admin@petfind.com",
      phone: "+254700000000",
      password: "admin123",
      role: "admin",
    });

    localStorage.setItem("users", JSON.stringify(users));
  }
};