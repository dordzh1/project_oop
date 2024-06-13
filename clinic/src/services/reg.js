import axios from 'axios';

export const createPatient = async (patient) => {
  try {
    const response = await axios.post("https://localhost:7204/api/Patients", patient);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
