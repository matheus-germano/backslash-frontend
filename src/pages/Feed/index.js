//  importing dependencies
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

// importing components
import { Menu } from '../../components/Menu';

import {
  HamburgerMenu,
} from './elements';

export function Feed() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu onClick={() => setMenuOpen(true)}>
        <FaBars />
      </HamburgerMenu>
      <Menu menuIsOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
