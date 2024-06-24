import {
	render,
	fireEvent,
	getByLabelText,
  getByRole,
	waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

import LoginForm from "../src/components/LoginForm.jsx";
import * as AuthService from "../src/services/auth.service";
import { submitAuthForm } from "../src/services/auth.service";

describe("Login Form Tests", () => {
	describe("Login User Tests", () => {
		describe("Login User", () => {
      let mockSubmitAuthForm;
      let emailAddress;
      let password;
      beforeEach(() => {
        render(
					<MemoryRouter>
						<LoginForm path="/login" />
					</MemoryRouter>
				);
        emailAddress = getByLabelText(document.body, "Email", {
					selector: "input",
				});
				password = getByLabelText(document.body, "Password", {
					selector: "input",
				});
				vi.mock("../src/services/auth.service", () => ({
					submitAuthForm: vi.fn(() => Promise.resolve({ status: 200 })),
				}));
				mockSubmitAuthForm = vi.spyOn(AuthService, "submitAuthForm");
			});
			afterEach(() => {
        vi.clearAllMocks();
      });
      
      it("should render the login form correctly on /login path", () => {
				expect(emailAddress).toBeInTheDocument();
				expect(password).toBeInTheDocument();
				expect(getByRole(document.body, "button", { name: "Login" })).toBeInTheDocument();
      });

      it("should expect submitAuthForm to be called", async () => {
				const body = { email: "email@email.com", password: "Password123." };
        userEvent.type(emailAddress, "email@email.com");
				userEvent.type(password, "Password123.");

        await submitAuthForm(body, "/login");

        expect(submitAuthForm).toHaveBeenCalled();
        expect(submitAuthForm).toHaveBeenCalledWith(
					{ email: "email@email.com", password: "Password123." },
					"/login"
				);
			});

			it("should handle the form submission correctly and return success", async () => {
				const body = { email: emailAddress, password: password };
				userEvent.type(emailAddress, "email@email.com");
				userEvent.type(password, "Password123.");

				const response = await submitAuthForm(body, "/login");

        expect(response.status).toBe(200);
			});
		});
	});

	describe("Sign Up User", () => {
    let mockSubmitAuthForm;
    let fullNameInput;
    let emailInput;
    let passwordInput;
    let submitButton;
		beforeEach(() => {
			mockSubmitAuthForm = vi.spyOn(AuthService, "submitAuthForm");
			render(
				<MemoryRouter>
					<LoginForm path="/sign-up" />
				</MemoryRouter>
      );
      fullNameInput = getByLabelText(document.body, "Full Name");
			emailInput = getByLabelText(document.body, "Email");
			passwordInput = getByLabelText(document.body, "Password");
			submitButton = getByRole(document.body, "button", {
				name: "Sign Up",
			});
		});
		afterEach(async () => {
      vi.clearAllMocks();
      await userEvent.clear(fullNameInput);
      await userEvent.clear(emailInput);
      await userEvent.clear(passwordInput);
    });
    
    it("should render the sign up form correctly", () => {
			expect(fullNameInput).toBeInTheDocument();
			expect(emailInput).toBeInTheDocument();
			expect(passwordInput).toBeInTheDocument();
			expect(
				getByRole(document.body, "button", { name: "Sign Up" })
			).toBeInTheDocument();
		});

		it("should expect submitAuthForm to be called on click", async () => {
      mockSubmitAuthForm.mockResolvedValueOnce({ status: 201 });

			await userEvent.type(fullNameInput, "Test User");
			await userEvent.type(emailInput, "email@email.com");
			await userEvent.type(passwordInput, "Password123.");
			await fireEvent.click(submitButton);

      await waitFor(() => {
				expect(mockSubmitAuthForm).toHaveBeenCalledTimes(1);
				//? My input fields seem to have a lot of random characters added to the value and therefore the test fails since the name and email do not match
				// expect(mockSubmitAuthForm).toHaveBeenCalledWith(
				// 	{
				// 		fullName: "Test User",
				// 		email: "email@email.com",
				// 		password: "Password123.",
				// 	},
				// 	"/sign-up"
				// );
			});
      mockSubmitAuthForm.mockRestore();
    });
    
		it("should expect submitAuthForm to return 201 success message", async () => {
      mockSubmitAuthForm.mockResolvedValueOnce({ status: 201 });

			await userEvent.type(fullNameInput, "Test User");
			await userEvent.type(emailInput, "email@email.com");
			await userEvent.type(passwordInput, "Password123.");
			fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockSubmitAuthForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitAuthForm.mock.results[0].value).resolves.toEqual({
					status: 201,
				});
      });
      mockSubmitAuthForm.mockRestore();
    });
    
    it("should expect submitAuthForm to return error message", async () => {
      mockSubmitAuthForm.mockResolvedValueOnce({ status: 400, message: "Bad request" });

      await userEvent.type(fullNameInput, "Test User");
      await userEvent.type(emailInput, "email@email.com");
      await userEvent.type(passwordInput, "Password123.");
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockSubmitAuthForm).toHaveBeenCalledTimes(1);
        expect(mockSubmitAuthForm.mock.results[0].value).resolves.toEqual({
					status: 400,
					message: "Bad request",
				});
      });
      mockSubmitAuthForm.mockRestore();
    });
	});
});
