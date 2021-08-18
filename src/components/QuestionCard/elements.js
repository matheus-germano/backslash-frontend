import styled from 'styled-components';

export const QuestionCardContainer = styled.div`
  max-width: 600px;
  min-height: 360px;

  background: var(--white);
  border-radius: 10px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionCardHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
`;

export const UserName = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GroupName = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const QuestionCardBody = styled.div`

`;

export const QuestionCardText = styled.p`
  text-align: justify;
`;

export const QuestionCardFooter = styled.div`
  margin-top: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Report = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: var(--red);
  }
`;


export const QuestionCardInput = styled.input`
  width: 100%;
  height: 60px;

  background-color: var(--background);
  border-radius: 10px;

  padding: 0 20px;
`;
