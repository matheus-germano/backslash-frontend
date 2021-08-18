import styled from 'styled-components';

export const HamburgerMenu = styled.div`
  position: absolute;
  padding: 50px;

  display: none;
  align-items: center;
  justify-content: flex-start;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (max-width: 675px) {
    display: flex;
  }
`;

export const FeedContainer = styled.div`

`;

export const FeedWrapper = styled.div`

`;
