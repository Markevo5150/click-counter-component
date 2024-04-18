import './App.css';
import logo from '../src/img/freeCodeCampLogo.png';
import Button from '../src/components/Button';
import Counter from '../src/components/Counter';
import { useState } from 'react';

function App() {

  const [clickNum, setClickNum] = useState(0); 

  const ClickButton = () => {
    setClickNum(clickNum + 1);
  }
  const restart = () => {
    setClickNum (0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='main-logo'
          src={logo}
          alt='main-logo'
        />
      </div>
      <div className='main-container'>

        <Counter
          clickNum={ clickNum }
        />

        <Button
          text='Click'
          isClickButton={true}
          clickManage={ClickButton}
        />

        <Button
          text='Restart'
          isClickButton={false}
          clickManage= {restart}
        />
        
        </div>
      
    </div>
  );
}

export default App;
