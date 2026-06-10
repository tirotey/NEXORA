import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/auth"

import "../Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  const navigate = useNavigate()

  const handleLogin = (e) => {
  e.preventDefault()

  setErro("")

  const success = login(email, senha)

  if (success) {
    navigate("/dashboard")
  } else {
    setErro("Email ou senha inválidos")
  }

  }

  return (
    <div className="login-container">

      <div className="login-card">

        <img
          src="/logo.png"
          alt="Nexora"
          className="login-logo"
        />

        <h1 className="login-title">
          Bem-vindo
        </h1>

        <p className="login-subtitle">
          Acesse seu painel administrativo
        </p>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Seu email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Sua senha"
            className="login-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>

        </form>

        {erro && (
          <p className="login-error">
            {erro}
          </p>
        )}

      </div>

    </div>
  )
}

export default Login