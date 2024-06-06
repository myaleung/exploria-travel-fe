import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";

const Login = () => {
  return (
    <>
      <PageTitle title="Login" />
      <section className="wrapper d-flex flex-column justify-content-center min-vh-atf">
        <LoginForm />
      </section>
    </>
  );
};
export default Login;
