import axios from 'axios';

const API_BASE_URL = 'https://api.cosmocloud.com'; // Replace with the actual API base URL

export const getEmployees = async () => {
    return await axios.get(`${API_BASE_URL}/employees`);
};

export const getEmployeeById = async (id) => {
    return await axios.get(`${API_BASE_URL}/employees/${id}`);
};

export const createEmployee = async (employee) => {
    return await axios.post(`${API_BASE_URL}/employees`, employee);
};

export const deleteEmployee = async (id) => {
    return await axios.delete(`${API_BASE_URL}/employees/${id}`);
};
