import { BsArrowRight } from 'react-icons/bs';
import { FiThumbsUp, FiSlash } from 'react-icons/fi';

// importing images
import profile from '../../assets/images/profile.jpg';

import {
  QuestionCardContainer,
  QuestionCardHeader,
  Image,
  UserName,
  GroupName,
  QuestionCardBody,
  QuestionCardText,
  QuestionCardFooter,
  Row,
  Likes,
  Report,
  QuestionCardInput,
} from './elements';

export function QuestionCard() {
  return (
    <>
      <QuestionCardContainer>
        <QuestionCardHeader>
          <Image src={profile} alt='' />
          <UserName>Matheus Germano</UserName>
          <BsArrowRight/>
          <GroupName>Nome do Grupo</GroupName>
        </QuestionCardHeader>
        <QuestionCardBody>
          <QuestionCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </QuestionCardText>
        </QuestionCardBody>
        <QuestionCardFooter>
          <Row>
            <Likes>
              <FiThumbsUp/>
              <p>10</p>
            </Likes>
            <Report>
              <FiSlash/>
              <p>Denunciar</p>
            </Report>
          </Row>
          <QuestionCardInput type="text" placeholder="Enviar um comentário"/>
        </QuestionCardFooter>
      </QuestionCardContainer>
    </>
  );
}
