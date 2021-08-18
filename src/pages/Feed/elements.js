import styled from 'styled-components';

export const FeedPageContainer =  styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;
`;

export const FeedWrapper = styled.div`

`;

export const SuggestionsContainer = styled.div`

`;
