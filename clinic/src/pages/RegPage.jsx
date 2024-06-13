import  { useContext, useState } from 'react';
import CreateRegForm from '../components/CreateRegForm';
import { createPatient } from '../services/reg';
import { Stack, Image, Center, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function RegPage() {
  const [showProfileButton, setShowProfileButton] = useState(false);
  const [showRegForm, setRegForm] = useState(true);
  const { setUserData } = useContext(UserContext);

  const onCreate = async (patient) => {
    try {
      const response = await createPatient(patient);
      const patientData = response.data; 
      setUserData({ id: patientData.id, name: patientData.name });
      setShowProfileButton(true);
      setRegForm(false);
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <>
      <Stack direction="row">
        <Image width={20} src="src/images/logo.png" alt="logotip" marginTop={5} marginLeft={5} />
        <Image width={140} src="src/images/stankin.png" alt="stankin" marginTop={5} />
        <Center>
          <Text fontSize={30} marginTop={10} marginLeft={10}>
            Клиника им. Нососвицкого В.Б.
          </Text>
        </Center>
        <Button backgroundColor='#1E90FF' color='white' fontSize={25} marginTop={10} marginLeft={600}>
          <Link to="/">Домой</Link>
        </Button>
      </Stack>
      <div>
        <Center>
          <div className="flex flex-col w-1/3 gap-10">
          {showRegForm && (
              <CreateRegForm onCreate={onCreate} />
            )}
            
            {showProfileButton && (
              <>
              <Center>
                <Text fontSize={20} marginTop={20}>Поздравляем, вы успешно зарегистрированы</Text>
              </Center>
              <Center>
                <Button as={Link} to="/profile" colorScheme="blue">
                  Перейти на страницу профиля
                </Button>
              </Center>
              </>
            )}
          </div>
        </Center>
      </div>
    </>
  );
}