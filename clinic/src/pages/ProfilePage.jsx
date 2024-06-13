import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Stack, Image, Center, Text, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function ProfilePage() {
    const { userData } = useContext(UserContext);
    return (
        <>
            <Stack direction='row'>
                <Image width={20} src='src/images/logo.png' alt='logotip' marginTop={5} marginLeft={5}/>
                <Image width={140} src='src/images/stankin.png' alt='stankin' marginTop={5}/>
                <Center>
                    <Text fontSize={30} marginTop={10} marginLeft={10}>Клиника им. Нососвицкого В.Б.</Text>
                </Center>
                <Text fontSize={20} marginTop={10} marginLeft={650}>
                    {userData.name}
                </Text>
            </Stack>
            <Center>
                <Text borderBottom='1px' fontSize={30} marginTop={10}>Мой профиль</Text> 
            </Center>
            <Center>
                <Box border='1px' borderStyle='thin' width={40} fontSize={20} marginTop={20}>
                    <Center><Link to="/createappointment">Записаться</Link></Center>
                </Box>
            </Center>
            <Center>
                <Box border='1px' borderStyle='thin' width={40} fontSize={20} marginTop={5}>
                    <Center><Link to="/myappointments">Мои записи</Link></Center>
                </Box>
            </Center>
        </>
    )
}
  
