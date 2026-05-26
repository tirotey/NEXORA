export const login = (email, senha) => {
  if (email === "admin@teste.com" && senha === "123") {
    localStorage.setItem("auth", "true")
    return true
  }

  return false
}

export const logout = () => {
  localStorage.removeItem("auth")
}

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"
}