import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HomeHeader = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    gap: 50px;
  }
`;

export const HomeAside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  img {
    max-width: 512px;

    @media (max-width: 900px) {
      max-width: 416px;
    }

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    flex: none;

    p, span {
      display: none;
    }
  }
`;

export const HomeText = styled.p`
  width: 300px;
  text-align: justify;

  span {
    font-weight: bold;
  }
`;

export const HomeSection = styled.section`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex: none;
  }
`;

export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormTitle = styled.h1`
  font-size: 1rem;
  transition: all 0.2s;

  @media (max-width: 350px) {
    text-align: center;
  }
`;

export const FormInput = styled.input`
  width: 300px;
  height: 60px;

  padding: 0 20px;
  border: 2px solid transparent;
  margin: 0 auto;

  border-radius: 10px;

  transition: all 0.2s;

  ::placeholder {
    color: var(--muted);
  }

  :focus {
    border: 2px solid var(--primary);
  }


  @media (max-width: 350px) {
    width: 250px;
  }
`;

export const FormButton = styled.button`
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

export const FormText = styled.p`
  max-width: 300px;
  text-align: center;

  span {
    color: var(--primary);
    text-decoration: underline;
    font-weight: bold;

    cursor: pointer;
  }
`;
