import AddAppointment from '../components/AddAppointment'
import { Stack, Image, Center, Text} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';


export default function MyAppointmentPage() {
    return (
    <>
    <Stack direction='row'>
        <Image width={20} src='src/images/logo.png' alt='logotip' marginTop={5} marginLeft={5}/>
        <Image width={140} src='src/images/stankin.png' alt='stankin' marginTop={5}/>
        <Center>
            <Text fontSize={30} marginTop={10} marginLeft={10}>Клиника им. Нососвицкого В.Б.</Text>
        </Center>
        <Text height={35} border='1px' borderStyle='thin'fontSize={25} marginTop={10} marginLeft={650}>
            <Link to="/profile">Профиль</Link>
        </Text>
    </Stack>
    <Center><Text fontSize={25} marginTop={20}>Мои записи</Text></Center>
    <div>
        <ul className="flex flex-col gap-5 flex-1">
            <li>
                <AddAppointment/>
            </li>
        </ul>
    </div>
    <Text marginTop={200}></Text>
  </>
    )
  }
  
