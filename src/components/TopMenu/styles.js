import styled from 'styled-components';
import { Menu as MenuIcon, XCircle } from '@styled-icons/boxicons-regular';

export const TopBarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 8rem;
  background: var(--white);
  z-index: 2;

  @media (min-width: 640px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  padding: 0 3rem;
  margin-right: 5rem;
  font-size: 3rem;
  cursor: pointer;
`;

export const MenuWrapper = styled.nav``;

export const Menu = styled.ul`
  overflow-y: hidden;
  display: flex;
  position: absolute;
  height: ${p => p.isMenuOpen ? '31rem' : '0'};
  top: 8rem;
  left: 0;
  flex-direction: column;
  background: var(--white);
  width: 100%;
  transition: 0.5s;
  z-index: 1;

  @media (min-width: 640px) {
    opacity: 1;
    position: static;
    flex-direction: row;
    transform: none;
    position: static;
    height: auto;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.5rem;

  &:hover {
    background-color: var(--offwhite);
  }

  &:first-child {
    border-top: 1px solid var(--offwhite);
  }
`;

export const MenuItemLink = styled.a`
  padding: 3rem 0;
  text-align: center;
  width: 100vw;

  @media (min-width: 640px) {
    width: 100%;
    padding: 3rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: block ;
  width: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    width: 3.2rem;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

export const MobileMenuIconOpen = styled(MenuIcon)`
  color: var(--dark-gray);
  width: 100%;
`;

export const MobileMenuIconClose = styled(XCircle)`
  color: var(--dark-gray);
  width: 100%;
`;
