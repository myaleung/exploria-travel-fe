import PasswordForm from "../components/PasswordForm";
import PageTitle from "../components/PageTitle";

const PasswordUpdateForm = () => {
	return (
		<>
			<PageTitle title="Change your password" />
			<section className="wrapper d-flex flex-column justify-content-center min-vh-atf overflow-hidden">
				<div className="row">
					<div className="col d-flex flex-column justify-content-evenly align-items-center gap-4 z-1">
						<h1 className="text-white">Change your password</h1>
						<PasswordForm />
					</div>
				</div>
			</section>
		</>
	);
};
export default PasswordUpdateForm;
