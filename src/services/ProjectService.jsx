import constants from "../config/constants";


export default class ProjectService {
	static async CreateProject(category_id, project_name, file, project_description) {

        const formData = new FormData()

        formData.append("category_id", category_id)
        formData.append("project_name", project_name)
        formData.append("file", file)
        formData.append("project_description", project_description)


		let response = await fetch("http://localhost:8080/admin/project", {
			method: "POST",
            body: formData
		});	

		response = await response.json();
		return response;
	}

    static async AllPorjects() {
		let response = await fetch("http://localhost:8080/admin/project", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		});	

		response = await response.json();
		return response;
	}
}