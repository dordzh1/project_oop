import axios from 'axios';

export const fetchDoctors = async () => {
    try {
        const response = await axios.get('https://localhost:7204/api/Doctors');
        return response.data;
    } catch (error) {
        console.error('ошибка при получении докторов', error);
        throw error;
    }
};

export const fetchDoctorById = async (doctorId) => {
    try {
        const response = await fetch(`https://localhost:7204/api/Doctors/${doctorId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ошибка при получении данных доктора', error);
        throw error;
    }
};