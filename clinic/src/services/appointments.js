import axios from 'axios';

export const postAppointment = async (doctorId, patientId, appointmentDate) => {
    try {
        const response = await axios.post('https://localhost:7204/api/Appointments', {
            doctorId,
            patientId,
            appointmentDate,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to book appointment:', error);
    }
};


export const fetchAppointment = async (patientId) => {
    try {
        const response = await axios.get(`https://localhost:7204/api/Appointments/${patientId}`)
            
        return response.data;
    } catch (error) {
        console.error('Failed to book appointment:', error);
    }
};