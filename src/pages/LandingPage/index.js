import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Navbar } from '../../components';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default function LandingPage() {
  const [userInput, setUserInput] = useState('');
  
  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <Form>
          <Form.Group>
            <Form.Input size='massive' placeholder='Insira um usuário' name='github user' onChange={handleSearch}/>
            <NavLink to={{ pathname: '/card', state: { userInput } }}>
              <Form.Button size='massive' color="orange" content='Procurar'/>
            </NavLink>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

