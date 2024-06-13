import { useState } from 'react';
import PropTypes from 'prop-types';
import { Center, Text, Input, Button } from '@chakra-ui/react';



function CreateRegForm({ onCreate }) {
  const [patient, setPatient] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    onCreate(patient);
    setPatient({});
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
      <Center>
        <Text fontSize={25} marginTop={20}>Регистрация</Text>
      </Center>
      <Input
        placeholder="Имя Фамилия"
        value={patient.name || ''}
        onChange={(e) => setPatient({ ...patient, name: e.target.value })}
      />
      <Input
        placeholder="Почта"
        value={patient.email || ''}
        onChange={(e) => setPatient({ ...patient, email: e.target.value })}
      />
      <Button backgroundColor='#FF1493' color='white' type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
}

CreateRegForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateRegForm;
