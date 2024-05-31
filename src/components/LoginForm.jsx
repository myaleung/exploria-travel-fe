const LoginForm = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="loginName" className="form-control" />
          <label className="form-label" for="loginName">
            Email or username
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" id="loginPassword" className="form-control" />
          <label className="form-label" for="loginPassword">
            Password
          </label>
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
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
