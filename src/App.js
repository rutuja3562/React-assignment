
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Div } from './components/Div';

function App() {
  // const [primary, setPrimary] = useState("Primary Button");
  return (
    <div className="App">
      <div>
        <Div>
          <Button children={"Primary Button"}></Button>
          <Button children={"Default Button"}></Button>
          <Button children={"Dashed Button"}></Button>
          <Button children={"Text Button"}></Button>
          <Button children={"Link Button"}></Button>
        </Div>
      </div>
    </div>
  );
}

export default App;
