const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container row align-self-center z-1">
      <h1 className="text-white">Sign In</h1>
      <form className="text-white" onSubmit={handleSubmit}>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="loginName">
            Username
          </label>
          <input
            type="text"
            id="loginName"
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="emailAddress">
            Email
          </label>
          <input
            type="email"
            id="emailAddress"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
        <div className="text-center">
          <p className="text-white">
            Not a member? <a href="/sign-up">Register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
