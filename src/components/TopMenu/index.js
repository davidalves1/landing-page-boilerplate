import { useState } from 'react';
import Link from 'next/link';
import * as S from './styles';

const menuOptions = [
  { name: 'Início', link: '/' },
  { name: 'Planos', link: '#plans' },
  { name: 'Cobertura', link: '#coverage' },
  { name: 'Contatos', link: '#contact' },
];

const TopMenu = () => {
  const [ isMenuOpen, setMenuState ] = useState(false);

  const toogleMenuState = () => {
    console.log('toogle', !isMenuOpen);
    setMenuState(!isMenuOpen);
  }

  return (
    <S.TopBarWrapper>
      <S.Logo>Meu Provedor</S.Logo>
      <S.MenuWrapper>
        <S.MobileMenuButton onClick={toogleMenuState}>
          { !isMenuOpen && <S.MobileMenuIconOpen /> }
          { isMenuOpen && <S.MobileMenuIconClose /> }
        </S.MobileMenuButton>
        <S.Menu isMenuOpen={isMenuOpen}>
          { menuOptions.map((item, key) => (
            <S.MenuItem key={key}>
              <Link href={item.link}>
                <S.MenuItemLink>{ item.name }</S.MenuItemLink>
              </Link>
            </S.MenuItem>
          )) }
        </S.Menu>
      </S.MenuWrapper>
    </S.TopBarWrapper>
  );
};

export default TopMenu;
