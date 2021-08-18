//  importing dependencies
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

// importing components
import { Menu } from '../../components/Menu';
import { QuestionCard } from '../../components/QuestionCard';

import {
  FeedPageContainer,
  HamburgerMenu,
  FeedContainer,
  FeedWrapper,
  SuggestionsContainer,
} from './elements';

export function Feed() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <FeedPageContainer>
      <div>
        <HamburgerMenu>
          <FaBars onClick={() => setMenuOpen(true)}/>
        </HamburgerMenu>
        <Menu menuIsOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <FeedContainer>
        <FeedWrapper>
          <QuestionCard/>
        </FeedWrapper>
      </FeedContainer>
      {/* <SuggestionsContainer>

      </SuggestionsContainer> */}
    </FeedPageContainer>
  );
}
