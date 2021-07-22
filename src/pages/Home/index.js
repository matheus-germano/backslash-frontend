// importing dependencies
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { RegisterModal } from '../../components/RegisterModal';

// importing images
import home from '../../assets/images/home.svg';
import logo from '../../assets/images/logo.svg';

// importing styles
import {
  HomeContainer,
  HomeHeader,
  ContentContainer,
  HomeAside,
  HomeText,
  HomeSection,
  HomeForm,
  FormTitle,
  FormInput,
  FormButton,
  FormText
} from './elements'

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function authenticateUser(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {
      toast.success('Usuário autenticado.');
      setEmail('');
      setPassword('');
    } else {
      toast.error('Preencha os campos corretamente.');
    }
  }

  return (
    <>
      <div><Toaster/></div>
      {
        modalVisible && (
          <RegisterModal isOpen={setModalVisible} />
        )
      }
      <HomeContainer>
        <HomeHeader>
          <img src={logo} alt='backSlash_' />
        </HomeHeader>
        <ContentContainer>
          <HomeAside>
            <img src={home} alt='' />
            <HomeText><span>Crie</span> e <span>responda</span> perguntas e <span>interaja</span> com todas as <span>comunidades</span> presentes na plataforma!</HomeText>
          </HomeAside>
          <HomeSection>
            <HomeForm onSubmit={authenticateUser}>
              <FormTitle>Faça login na plataforma.</FormTitle>
              <FormInput 
                type='text'
                placeholder='Seu e-mail'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <FormInput 
                type='password'
                placeholder='Sua senha'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormButton
                type='submit'
              >
                Entrar
              </FormButton>
              <FormText>Não tem uma conta? <span onClick={() => setModalVisible(true)}>Cadastre-se</span></FormText>
            </HomeForm>
          </HomeSection>
        </ContentContainer>
      </HomeContainer>
    </>
  );
}