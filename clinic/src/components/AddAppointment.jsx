import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Center, Button} from '@chakra-ui/react'
import { UserContext } from '../context/UserContext';
import  { useState, useEffect, useContext } from 'react';
import { fetchAppointment } from '../services/appointments';
import { fetchDoctorById } from '../services/doctors';
import { fetchCabinetById } from '../services/cabinets';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { formatInTimeZone } from 'date-fns-tz'


const Appointment = ({appointmentDate}) => {
    const timeZone = 'Africa/Dakar'; // Временная зона Москвы
    const formattedDate = formatInTimeZone(new Date(appointmentDate), timeZone, 'yyyy-MM-dd HH:mm');
    return <Text py='2'>{formattedDate}</Text>;
};

Appointment.propTypes = {
    appointmentDate: PropTypes.string.isRequired,
};

export default function AddAppointment() {
    const { userData } = useContext(UserContext);
    const patientId = userData.id;
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [cabinets, setCabinets] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const appointmentsData = await fetchAppointment(patientId);
                setAppointments(appointmentsData);
                
                // Получаем данные о врачах для каждого приема
                const doctorsData = await Promise.all(appointmentsData.map(async (appointment) => {
                    try {
                        const doctor = await fetchDoctorById(appointment.doctorId);
                        return doctor;
                    } catch (error) {
                        console.error('Ошибка при получении данных доктора', error);
                        return null;
                    }
                }));
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
                console.error('Failed to fetch data', error);
            }
        };

        fetchData();
    }, [patientId]);

    return (
        <>
            {appointments && (
                appointments.map((appointment, index) => (
                    <Card key={appointment.id} marginTop={5} marginLeft={400} width={700} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={`data:image/jpeg;base64,${doctors[index]?.photo}`} alt='Врач' />
                        <Stack>
                            <CardBody>
                                <Heading size='md'>{doctors[index]?.name || 'Имя доктора'}</Heading>
                                <Text py='2'>{doctors[index]?.specialization || 'Специализация'}</Text>
                                <Text>{cabinets[index]?.name || 'Название кабинета'}</Text>
                            </CardBody>
                            <CardFooter>
                                <Appointment appointmentDate={appointment.appointmentDate} />
                            </CardFooter>
                        </Stack>
                    </Card>
                ))
            )} 
            {appointments === undefined && (
                <div>
                <Center>
                    <Text fontSize={25} marginTop={20}>У вас еще нет записей</Text>
                </Center>
                <Center>
                    <Button backgroundColor='#FF1493' color='white' marginTop={10}><Link to="/createappointment">Записаться</Link></Button>
                </Center>
                </div>
            )}
       </>     
    )
}

