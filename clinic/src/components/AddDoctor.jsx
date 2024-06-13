import { Card, CardBody, CardFooter, Image, Stack, Heading, 
    Text, Button, Box, InputGroup, Input, Select, Flex 
} from '@chakra-ui/react'
import  { useState, useEffect, useContext } from 'react';
import { fetchDoctors } from '../services/doctors'; 
import { fetchCabinetById } from '../services/cabinets';
import { useDoctorContext } from '../context/DoctorContext';
import { useDateTime } from '../context/DateTimeContext';
import { postAppointment } from '../services/appointments';
import { UserContext } from '../context/UserContext';

export default function AddDoctor() {
    const [doctors, setDoctors] = useState([]);
    const [cabinets, setCabinets] = useState([]);
    const { selectedDoctorId, setSelectedDoctorId } = useDoctorContext();
    const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useDateTime();
    const [showDateTimeInput, setShowDateTimeInput] = useState(false);
    const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(null);
    useEffect(() => {
        const getDoctors = async () => {
            try {
                const doctorsData = await fetchDoctors();
                setDoctors(doctorsData);

                const cabinetsData = await Promise.all(doctorsData.map(async (doctor) => {
                    try {
                        const cabinet = await fetchCabinetById(doctor.cabinetId);
                        return cabinet;
                    } catch (error) {
                        console.error('Ошибка при получении данных кабинета', error);
                        return null;
                    }
                }));
                setCabinets(cabinetsData);
            } catch (error) {
                console.error('Failed to fetch doctors', error);
            }
        };
        getDoctors();
    }, []);

    const handleAppointment = (doctorId, index) => {
        setSelectedDoctorId(doctorId);
        setSelectedDoctorIndex(index);
        setShowDateTimeInput(true);
    };
    const { userData } = useContext(UserContext);
    const handleDateTimeSubmit = async () => {
        // Обработка выбранной даты и времени
        const dateTime = `${selectedDate}T${selectedTime}:00Z`;
        const patientId = userData.id;
        await postAppointment(selectedDoctorId, patientId, dateTime);
        setShowDateTimeInput(false);
    };

    const handleDateTimeStop = async () => {
        setShowDateTimeInput(false);
    };

    const timeOptions = [
        { value: '09:00', label: '09:00' },
        { value: '10:00', label: '10:00' },
        { value: '11:00', label: '11:00' },
        // Добавьте другие временные варианты по необходимости
    ]
    
    return (
        <>
        {doctors.map((doctor,index) => (
                <Flex key={index} alignItems="center" marginBottom={4} marginTop={10} marginLeft={350}>
                    <Card marginLeft={4} width={700} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={`data:image/jpeg;base64,${doctor.photo}`} alt='Врач'/>
                        <Stack>
                            <CardBody>
                                <Heading size='md'>{doctor.name}</Heading>
                                <Text py='2'>{doctor.specialization}</Text>
                                <Text>{cabinets[index]?.name || 'Название кабинета'}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button fontSize={20} variant='solid' backgroundColor='#1E90FF' color='white' onClick={() => handleAppointment(doctor.id, index)}>
                                    Записаться
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                    {selectedDoctorIndex === index && showDateTimeInput && (
                        <Box marginLeft={4} display="flex" flexDirection="column">
                            <InputGroup marginBottom={2}>
                                <Input type="date" placeholder="Выберите дату" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                            </InputGroup>
                            <InputGroup marginBottom={2}>
                                <Select placeholder="Выберите время" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                                    {timeOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </Select>
                            </InputGroup>
                            
                            <Button backgroundColor='#FF1493' color='white' onClick={handleDateTimeSubmit}>Выбрать</Button>
                            <Button marginTop={1} onClick={handleDateTimeStop}>Отмена</Button>       
                        </Box>
                    )}
                </Flex>
            ))}
        </>
        
    )
}