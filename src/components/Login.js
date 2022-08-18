import { useState } from "react"

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setLoggedIn(true)
    }, 3000)
  }

  return (
    <div>
      <h1>{loggedIn ? "Vous êtes connecté" : "Login"}</h1>
      <form onSubmit={login}>
        <label>
          Email:
          <input type="email" placeholder="Email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
