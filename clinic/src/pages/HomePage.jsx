import { Stack, Image, Divider, Center, Text, Button} from '@chakra-ui/react'


import {
  Link
} from "react-router-dom";


export default function HomePage() {
  return (
    <>
    <Stack direction='row'>
      <Image width={20} src='src/images/logo.png' alt='logotip' marginTop={5} marginLeft={5}/>
      <Image width={140} src='src/images/stankin.png' alt='stankin' marginTop={5}/>
      <Center>
        <Text fontSize={30} marginTop={10} marginLeft={10}>Клиника им. Нососвицкого В.Б.</Text>
      </Center>
      <Button backgroundColor='#1E90FF' color='white' fontSize={25} marginTop={10} marginLeft={600}>
        <Link to="/registration">Войти</Link>
      </Button>
    </Stack>
    <Divider marginTop={5}/>
    <Center>
      <Text fontSize={30} marginTop={5}>Медицинский и диагностический центр им. Носовицкого В.Б. «Станкин»</Text>
    </Center>
    <Divider marginTop={5}/>
    <Stack direction='row'>
      <Image width={500} height={300} src='src/images/klinika.jpg' alt='klinika' marginTop={10} marginLeft={200}/>
      <Text fontSize={20} width={600} height={400} marginTop={10} marginLeft={50}>
      Cеть современных многопрофильных клиник, объединенных общей идеей заботы 
      о пациентах. Каждая медицинская клиника нашей сети оснащена новейшим 
      оборудованием диагностического центра, позволяющим применять инновационные 
      методы обследования и диагностики заболеваний.
      </Text>
    </Stack>
    </>
  )
}

