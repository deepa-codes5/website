
function Signin() {

  return (
    <div className="signin-page">
      <div className="signin-box">

        <h1>Welcome Back</h1>

        <p className="signin-text">
          Sign in to continue to your account
        </p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">
            Sign In
          </button>
        </form>
        <p className="signup-text">
          Don't have an account?
          <a href="#"> Sign Up</a>
        </p>

      </div>

    </div>
  );
}

export default Signin;