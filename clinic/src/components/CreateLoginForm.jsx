import { Center, Text, Button, Input} from '@chakra-ui/react'

import ProfilePage from '../pages/ProfilePage'
import {
    createBrowserRouter,
    Link
  } from "react-router-dom";
  
const router = createBrowserRouter([
    {
        path:"/profile",
        element: <ProfilePage /> 
      },
]);

export default function CreateLoginForm() {
    return (
      <form className="w-full flex flex-col gap-3">
        <Center><Text fontSize={25} marginTop={20}>Вход</Text></Center>
        <Input placeholder="Имя Фамилия"/>
        <Input placeholder="Почта"/>
        <Button colorScheme="blue">
          <Link to="/profile">Войти</Link>
        </Button>
      </form>
    )
  }