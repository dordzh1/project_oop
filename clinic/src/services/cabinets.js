import axios from 'axios';

export const fetchCabinets = async () => {
    try {
        const response = await axios.get('https://localhost:7204/api/Cabinets');
        return response.data;
    } catch (error) {
        console.error('ошибка при получении кабинета', error);
        throw error;
    }
};

export const fetchCabinetById = async (cabinetId) => {
    try {
        const response = await fetch(`https://localhost:7204/api/Cabinets/${cabinetId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('ошибка при получении данных кабинета', error);
        throw error;
    }
};