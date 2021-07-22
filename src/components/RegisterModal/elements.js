import styled from 'styled-components'

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 700px;

  background: var(--background);
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h1`
  font-size: 1.5rem;

  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin: auto 0;
  gap: 20px;

  img {
    width: 256px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalText = styled.h1`
  font-size: 1rem;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 300px;
  height: 60px;

  padding: 0 20px;
  margin: 0 auto;

  border-radius: 10px;

  transition: width 0.2s;

  ::placeholder {
    color: var(--muted);
  }

  :focus {
    border: 2px solid var(--primary);
    padding: 0 18px;
  }

  @media (max-width: 350px) {
    width: 250px;
  }
`;

export const ModalButton = styled.button`
  width: 300px;
  height: 60px;

  background: var(--primary);
  color: var(--white);
  font-weight: bold;

  padding: 0 20px;
  margin: 0 auto;

  border-radius: 10px;
  cursor: pointer;

  transition: all .2s;

  :hover {
    background: var(--primary-dark)
  }

  @media (max-width: 350px) {
    width: 250px;
  }
`;
