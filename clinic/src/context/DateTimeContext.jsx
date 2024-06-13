import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DateTimeContext = createContext();

export const DateTimeProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <DateTimeContext.Provider value={{ selectedDate, setSelectedDate, selectedTime, setSelectedTime }}>
            {children}
        </DateTimeContext.Provider>
    );
};

DateTimeProvider.propTypes = {
    children: PropTypes.node,
};

export const useDateTime = () => {
    const context = useContext(DateTimeContext);
    if (!context) {
        throw new Error('useDateTime must be used within a DateTimeProvider');
    }
    return context;
};