//  importing dependencies
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

// importing components
import { Menu } from "../../components/Menu";

export function Feed() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Menu />
    </>
  );
}