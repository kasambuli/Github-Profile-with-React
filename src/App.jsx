import './App.scss';
import CardList from './Components/CardList';
import Form from './Components/Form';
import { TEST_DATA as testData } from './utils/Testdata';
import { useState } from 'react';

const App = () => {
  const [profiles, setProfiles] = useState(testData)
  const [userName, setUserName] = useState(' ')
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const { name, avatar_url, company } = await res.json()
    setProfiles([...profiles, { name, avatar_url, company }])
  }
  return (
    <div className="App">
      <div className="header">GitHub Profile Search</div>
      <Form handleSubmit={handleSubmit} setUserName={setUserName} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
