import constants from "../config/constants";


export default class CategoryService {
	static async CreateCategory(category_name) {
		let response = await fetch("http://localhost:8080/admin/category", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				category_name
			}),
		});	

		response = await response.json();
		return response;
	}

    static async AllCategorys() {
		let response = await fetch("http://localhost:8080/admin/category", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		});	

		response = await response.json();
		return response;
	}
}