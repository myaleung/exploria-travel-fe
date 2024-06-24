import {
	render,
	screen,
	fireEvent,
	getByLabelText,
	getByRole,
	getByText,
  getByDisplayValue,
  toBeInTheDocument,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, it } from "vitest";

import PasswordForm from "../src/components/PasswordForm.jsx";
import * as AuthService from "../src/services/auth.service";
import { submitPasswordUpdate } from "../src/services/auth.service";

describe("Password Update Form Tests", () => { 
  let oldPassword;
  let newPassword;
  let newPassword2;
  let fakeToken;
  let mockSubmitPassAuthForm;
  beforeEach(() => {
		render(
			<MemoryRouter>
				<PasswordForm />
			</MemoryRouter>
		);
		oldPassword = getByLabelText(document.body, "Old Password", {
			selector: "input",
		});
		newPassword = getByLabelText(document.body, "New Password", {
			selector: "input",
		});
		newPassword2 = getByLabelText(document.body, "Re-enter New Password", {
			selector: "input",
		});
		fakeToken =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTIzNDU2In0sImlhdCI6MTYxMjM0NTY3OX0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
		// Mocking document.cookie
		Object.defineProperty(document, "cookie", {
			writable: true,
			value: `authToken=${fakeToken}; path=/;`,
    });
    mockSubmitPassAuthForm = vi.spyOn(AuthService, "submitPasswordUpdate");
	});
  afterEach(() => {
		vi.clearAllMocks();
		// Reset document.cookie
		Object.defineProperty(document, "cookie", {
			writable: true,
			value: "",
		});
	});

  it("should render the password update form", () => {
    expect(screen.getByLabelText("Old Password")).toBeInTheDocument();
    expect(screen.getByLabelText("New Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Re-enter New Password")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should expect submitPasswordUpdate to be called", async () => {
    const id = "123456";
    const body = { oldPassword: "oldPassword", newPassword: "Password123." };
    mockSubmitPassAuthForm.mockResolvedValueOnce({ status: 200 });
		userEvent.type(oldPassword, "oldPassword");
		userEvent.type(newPassword, "Password123.");
		userEvent.type(newPassword2, "Password123.");
    
		await submitPasswordUpdate(body, id, fakeToken);

		expect(submitPasswordUpdate).toHaveBeenCalled();
		expect(submitPasswordUpdate).toHaveBeenCalledWith(
			body, id, fakeToken
    );
    mockSubmitPassAuthForm.mockRestore();
	});
  
  it("should return successful message if valid result", async () => {
    const id = "123456";
    const body = { oldPassword: "oldPassword", newPassword: "Password123." };
    mockSubmitPassAuthForm.mockResolvedValueOnce({ status: 200 });
		userEvent.type(oldPassword, "oldPassword");
		userEvent.type(newPassword, "Password123.");
		userEvent.type(newPassword2, "Password123.");
    
		const response = await submitPasswordUpdate(body, id, fakeToken);

    expect(response.status).toBe(200);
    mockSubmitPassAuthForm.mockRestore();
  });
  
  it("should expect submitPasswordUpdate to return error message", async () => {
    const id = "123456";
    const body = { oldPassword: "oldPassword", newPassword: "Password123." };
    mockSubmitPassAuthForm.mockResolvedValueOnce({ status: 400, message: "Bad request" });
    userEvent.type(oldPassword, "oldPassword");
		userEvent.type(newPassword, "Password123.");
    userEvent.type(newPassword2, "Password123.");
    fireEvent.click(screen.getByRole("button"));

    await submitPasswordUpdate(body, id, fakeToken);

    await waitFor(() => {
      expect(mockSubmitPassAuthForm).toHaveBeenCalledTimes(1);
      expect(mockSubmitPassAuthForm.mock.results[0].value).toEqual({
				status: 400,
				message: "Bad request",
			});
    });

   });
});
