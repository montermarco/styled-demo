import React, { useState } from "react";
import './App.css';

import { ThemeProvider } from "styled-components";
import { redTheme, greenTheme, blueTheme } from "./components/themes/themes";
import Navbar from "./components/themes/Navbar";
import Button from "./components/themes/Button";
import Content from "./components/themes/Content";

function App() {
  const [theme, setTheme] = useState(redTheme);

  const handleTheme = () => {
    if (theme.primaryColor === "#4D8C32") {
      setTheme(greenTheme);
    } else if (theme.primaryColor === "#fff") {
      setTheme(blueTheme);
    } else {
      setTheme(redTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar>
          <Button onClick={handleTheme}>toggle theme</Button>
        </Navbar>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;


/*
//import {GreenBox, RedBox} from './components/Boxes';
//import {Box} from './components/AnimatedBox';
//import {Input} from './components/Input';
//import Header from './components/Header';
//import {Button, Button2} from './components/Button';

<Header/>
<Button>Click me</Button>
<Button2>Click me too</Button2>

<Input placeholder="usuario"/>
<Input type="password" placeholder="contraseña"/>
<Input type="email" placeholder="Correo electronico"/>
<Input type="number" placeholder="agrega tu edad"/>

<GreenBox color="red"/>
<RedBox color="green"/>
<Box/>
*/
