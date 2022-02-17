import constants from "../config/constants";


export default class UserService {
	static async LoginAccount(username, password) {
		let response = await fetch("http://localhost:8080/users/sign_in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password
			}),
		});	

		response = await response.json();
		return response;
	}
}