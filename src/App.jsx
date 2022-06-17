import { useState } from 'react';
import './App.css';
import Body from './component/body/body';
import Header from './component/header/header';

function App() {

 const [user, setUser] = useState('Ibrahim')


  return (
    <div className='expensesApp'>
      {user} from App
      <Header user = {user} />
      <Body user = {user} setUser =  {setUser}/>
      
    </div>
    
  );
}

export default App;
