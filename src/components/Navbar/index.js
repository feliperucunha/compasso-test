import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import './styles.css';

export default function Navbar({searchTerm}) {
    return (
      <div className="navbar">
        <NavLink to="/">
          <img src="https://compassouol.com/wp-content/uploads/2020/07/LogoCompasso-branco.png.webp" />
        </NavLink>

        { searchTerm ? (
          <div className="buttons">
            <NavLink to={{ pathname: '/repos', state: { searchTerm } }}>
              <Button inverted color='white'>
                Repositórios
              </Button>
            </NavLink>
            <NavLink to={{ pathname: '/starred', state: { searchTerm } }}>
              <Button inverted color='white'>
                Estrelados
              </Button>
            </NavLink>
          </div>
        ) : (null)}

      </div>
    )
}

