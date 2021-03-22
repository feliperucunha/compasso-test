import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default function UserCard({searchTerm}) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [twitter, setTwitter] = useState('');
  const [userBio, setBio] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [location, setLocation] = useState('');
  const [blog, setBlog] = useState('');
  const [company, setCompany] = useState('');
  const [starred, setStarred] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);

  const setData = ({ name, login, followers, following, public_repos, avatar_url, twitter_username, bio, html_url, location, blog, company, starred_url}) => {
    setName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setTwitter(twitter_username)
    setAvatar(avatar_url)
    setGithubLink(html_url)
    setBio(bio)
    setLocation(location)
    setBlog(blog)
    setCompany(company)
    setStarred(starred_url)
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data);
          setError(null);
        }
      })
  }
  
  const twitterLink = ('http://twitter.com/' + twitter);

  return (
    <div className="search-and-card-container">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input size="big" placeholder='Insira um usuário' name='github user' onChange={handleSearch}/>
            <Form.Button size="big" color="orange" content='Procurar' />
          </Form.Group>
        </Form>
      </div>

      { error ? (
        <div className="error">
          <span>Usuário não encontrado</span>
          <img src="http://pngimg.com/uploads/dog/dog_PNG50348.png" />
        </div>   
      ) : (
        <div className="card">
          <Card fluid>
            <Image src={avatar} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header className="username">
                <a href={githubLink}>
                  {userName} 
                </a>
              </Card.Header>

              <Card.Description>
                {userBio}
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <NavLink to={{ pathname: '/repos', state: { searchTerm } }}>
                <a>
                  <Icon name='fork' />
                  {repos} Repositório(s)
                </a>
              </NavLink>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                {followers} Seguidores
              </a>
              <a className="following">
                <Icon name='user' />
                {following} Seguindo
              </a>
            </Card.Content>
            { location ? (
              <Card.Content extra>
                <a>
                  <Icon name='map' />
                  {location}
                </a>
              </Card.Content>
            ) : (null)}
            { twitter ? (
              <Card.Content extra>
                <a href={twitterLink}>
                <Icon name='twitter' />
                {twitter}
                </a>
              </Card.Content>
            ) : (null)}
            { blog ? (
              <Card.Content extra>
                <a href={blog}>
                <Icon name='world' />
                Visitar Blog
                </a>
              </Card.Content>
            ) : (null)}
            { company ? (
              <Card.Content extra>
                <a>
                  <Icon name='building' />
                  {company}
                </a>
              </Card.Content>
            ) : (null)}

            </Card>
        </div>
      )}

    </div>

  );
}

