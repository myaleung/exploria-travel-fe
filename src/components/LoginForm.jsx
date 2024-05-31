const LoginForm = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div data-mdb-input-init class="form-outline mb-4">
          <input type="email" id="loginName" class="form-control" />
          <label class="form-label" for="loginName">
            Email or username
          </label>
        </div>

        <div data-mdb-input-init class="form-outline mb-4">
          <input type="password" id="loginPassword" class="form-control" />
          <label class="form-label" for="loginPassword">
            Password
          </label>
        </div>
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          class="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
        <div class="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
