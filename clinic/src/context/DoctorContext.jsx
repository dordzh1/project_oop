import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    return (
        <DoctorContext.Provider value={{ selectedDoctorId, setSelectedDoctorId }}>
            {children}
        </DoctorContext.Provider>
    );
};

DoctorProvider.propTypes = {
    children: PropTypes.node,
};

export const useDoctorContext = () => {
    const context = useContext(DoctorContext);
    if (!context) {
        throw new Error('useDoctorContext must be used within a DoctorProvider');
    }
    return context;
};