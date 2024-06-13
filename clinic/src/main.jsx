
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from './context/UserContext';
import { DoctorProvider } from './context/DoctorContext';
import { DateTimeProvider } from './context/DateTimeContext';

ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider>
      <UserProvider>
        <DoctorProvider>
          <DateTimeProvider>
            <App />
          </DateTimeProvider>
        </DoctorProvider>
      </UserProvider>
    </ChakraProvider>

)
