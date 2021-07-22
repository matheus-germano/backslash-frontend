// importing dependencies
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';

import register from '../../assets/images/register.svg'

// importing styles
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalForm,
  ModalText,
  ModalInput,
  ModalButton
} from './elements'

export function RegisterModal({ isOpen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser(e) {
    e.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      toast.success('Usuário autenticado.');
    } else {
      toast.error('Preencha os campos corretamente.');
    }
  }

  return (
    <>
      <div><Toaster/></div>
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Cadastre-se!</ModalTitle>
            <FaTimes onClick={() => isOpen(false)} />
          </ModalHeader>
          <ModalBody>
            <img src={register} alt="" />
            <ModalForm onSubmit={registerUser}>
              <ModalText>Preencha os dados corretamente.</ModalText>
              <ModalInput 
                type='text'
                placeholder='Seu nome completo'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <ModalInput 
                type='text'
                placeholder='Seu nome completo'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <ModalInput 
                type='password'
                placeholder='Sua senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <ModalButton
                type='submit'
              >
                Registrar
              </ModalButton>
            </ModalForm>
          </ModalBody>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}