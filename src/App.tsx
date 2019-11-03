import Counter from '@libz/Counter';
import { Internal } from './Internal';
import Switch from './Switch';
import './App.css';
import React from 'react';


import {createUseStyles} from 'react-jss'


let appStyles = createUseStyles({
    root:{
        backgroundColor: 'red'
    }
})


let App = () => {
    let styles = appStyles()
   return <div className="App">
        <h1 className={styles.root}>Hello World</h1>
        <Internal />
        <Counter />
        <Switch />
    </div>
}

export default App;
