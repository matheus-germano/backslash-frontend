import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 300px;
  height: 100vh;

  background: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 50px 0;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 675px) {
    width: 100%;
    align-items: center;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;

export const MenuProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50px;
  }
`;

export const UserName = styled.h1`
  font-size: 1rem;
  color: var(--white);
`;

export const MenuNav = styled.ul`
  width: 100%;
  padding-left: 50px;

  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding-left: 30px;
  }

  @media (max-width: 675px) {
    padding: 0;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  width: 100%;

  display: flex;
  align-items: center;

  background: var(--primary);
  border-radius: 10px 0 0 10px;

  a {
    text-decoration: none;
    color: var(--white);
    margin-left: 20px;

    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const Text = styled.p`
  color: var(--white);
  padding: 0 50px;

  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`;
