import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { submitPasswordUpdate } from "../services/auth.service";

const PasswordForm = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errors, setErrors] = useState("");
  const [verificationMessage, setVerificationMessage] = useState("");
  const oldPasswordInput = document.getElementById("oldPassword");
	const newPasswordInput = document.getElementById("newPassword");
  const newPassword2Input = document.getElementById("newPassword2");

  const updateOldPassword = (value) => {
    oldPasswordInput?.classList.remove("is-invalid");
    setOldPassword(value);
  };
  
  const updateNewPassword = (value) => {
		newPasswordInput?.classList.remove("is-invalid");
		setNewPassword(value);
	};

  const updateNewPassword2 = (value) => {
		newPassword2Input?.classList.remove("is-invalid");
		setNewPassword2(value);
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    //clear input classes of error styles
    if (oldPasswordInput?.classList.contains("is-invalid") || newPasswordInput?.classList.contains("is-invalid") || newPassword2Input?.classList.contains("is-invalid")) {
      oldPasswordInput.classList.remove("is-invalid");
      newPasswordInput.classList.remove("is-invalid");
      newPassword2Input.classList.remove("is-invalid");
    }
    setErrors("");
    setVerificationMessage("");

    try {
      validatePassword();
    } catch (error) { 
      return setErrors(error.message);
    }
    const userString = localStorage.getItem("user");
		let user;
		if (userString) {
			user = JSON.parse(userString);
    }
    const body = { oldPassword: oldPassword, newPassword: newPassword };
    try { 
      const result = await submitPasswordUpdate(body, user.id, user.token);
      switch (result.status) {
        case 200:
          //Password updated
          setErrors("");
          setVerificationMessage("Password updated successfully.");
          navigate("/");
					break;
				case 400:
					//Bad request
					setErrors(result.data.errors[0].msg);
					break;
				case 401:
					//Invalid credentials
					setErrors(result.data.message);
					break;
				case 404:
					//User not found
					setErrors(result.data.message);
					break;
				case 500:
					//User not found
					setErrors(result.data.message);
					break;
				default:
					setErrors("Something went wrong. Please try again later.");
      }
      //clear input fields
      setOldPassword("");
      setNewPassword("");
      setNewPassword2("");
    } catch (error) {
      return setErrors(error.message);
    }
  };

  const validatePassword = () => { 
    if (oldPassword === "" && newPassword === "" && newPassword2 === "") {
			oldPasswordInput.classList.add("is-invalid");
			newPasswordInput.classList.add("is-invalid");
			newPassword2Input.classList.add("is-invalid");
			throw new Error("All fields are required.");
		}
    if (newPassword !== newPassword2) {
      newPasswordInput.classList.add("is-invalid");
			newPassword2Input.classList.add("is-invalid");
      throw new Error("New passwords do not match.");
    }
    if (newPassword === oldPassword) {
      oldPasswordInput.classList.add("is-invalid");
			newPasswordInput.classList.add("is-invalid");
      throw new Error("New password must be different from old password.");
    }
  };

  return (
		<div className="container row align-self-center z-1">
			<form className="text-white" onSubmit={handleSubmit}>
				<div data-mdb-input-init className="form-outline mb-4">
					<label className="form-label" htmlFor="oldPassword">
						Old Password
					</label>
					<input
						type="password"
						id="oldPassword"
						className="form-control"
						placeholder="Enter your old password"
						value={oldPassword}
						onChange={(e) => updateOldPassword(e.target.value)}
					/>
				</div>
				<div data-mdb-input-init className="form-outline mb-4">
					<label className="form-label" htmlFor="newPassword">
						New Password
					</label>
					<input
						type="password"
						id="newPassword"
						className="form-control"
						placeholder="Enter your new password"
						value={newPassword}
						onChange={(e) => updateNewPassword(e.target.value)}
					/>
				</div>
				<div data-mdb-input-init className="form-outline mb-4">
					<label className="form-label" htmlFor="newPassword2">
						Re-enter New Password
					</label>
					<input
						type="password"
						id="newPassword2"
						className="form-control"
						placeholder="Re-enter your new password"
						value={newPassword2}
						onChange={(e) => updateNewPassword2(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					data-mdb-button-init
					data-mdb-ripple-init
					className="btn btn-primary btn-block mb-4"
				>
					Submit
				</button>
				{verificationMessage !== "" && (
					<div className="text-success">{verificationMessage}</div>
				)}
				{errors !== "" && <div className="errors text-danger">{errors}</div>}
			</form>
		</div>
	);
}
export default PasswordForm;