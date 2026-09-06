import { useState } from "react";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {

    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {

        const user = data.find((item) => {
          return item.email === email && item.password === password;
        });

        if (user) {
          alert("Login successful ✅");

          console.log("Logged in user:", user);

          
        } 
        else {
          alert("Invalid email or password ❌");
        }

      })
      
  }


  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to continue</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit">
            Login
          </button>

        </form>

        <p className="signup-link">
          Don't have an account?
          <span> Sign Up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;