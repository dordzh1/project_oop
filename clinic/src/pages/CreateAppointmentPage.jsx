import AddDoctor from '../components/AddDoctor'
import { UserContext } from '../context/UserContext';
import { Stack, Image, Center, Text, Button} from '@chakra-ui/react'
import { Link } from "react-router-dom";
  

export default function CreateAppointmentPage() {
    return (
        <>
        <Stack direction='row'>
            <Image width={20} src='src/images/logo.png' alt='logotip' marginTop={5} marginLeft={5}/>
            <Image width={140} src='src/images/stankin.png' alt='stankin' marginTop={5}/>
            <Center>
                <Text fontSize={30} marginTop={10} marginLeft={10}>Клиника им. Нососвицкого В.Б.</Text>
            </Center>
            
            <Button backgroundColor='#1E90FF' color='white' fontSize={25} marginTop={10} marginLeft={600}>
                <Link to="/profile">Профиль</Link>
            </Button>
        </Stack>
        <Center><Text fontSize={25} marginTop={20}>Записаться к врачу</Text></Center>
        <ul className="w-full flex flex-col gap-3">
            <li>
                 <AddDoctor/>
            </li>
        </ul>
        <Text marginTop={200}></Text>
        </>
    )
  }
  
