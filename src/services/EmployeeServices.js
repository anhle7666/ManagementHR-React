import axios from "axios";

const API_URL = "http://localhost:8080";

class EmployeeServices {
    static async getAllEmployees() {
        try {
            const response = await axios.get(`${API_URL}/employees`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async addNewEmployee(employee) {
        try {
            // console.log(JSON.parse(employee));
            const response = await axios.post(`${API_URL}/employees`, employee);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default EmployeeServices;
