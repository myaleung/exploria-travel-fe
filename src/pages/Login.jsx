import { useLocation } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";

const Login = () => {
  const location = useLocation();
  const state = location.state;
  let signUpStatus = "";

  if (state !== null) {
    signUpStatus = state.signUpMessage;
  }

  return (
    <>
      <PageTitle title="Login" />
      <section className="wrapper d-flex flex-column justify-content-center min-vh-atf">
        {state !== null && <div className="sign-up-status">{signUpStatus}</div>}
        <LoginForm path={location.pathname} />
      </section>
    </>
  );
};
export default Login;
