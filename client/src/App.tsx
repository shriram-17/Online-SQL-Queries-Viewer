import type { Component } from 'solid-js';
import Helloworld from './components/title';
import './index.css'
import Upload from './components/Sqlupload';

const App : Component = () => {
  return(
    <div>
    <h1 class ='font-mono text-center mt-2 text-2xl font-bold' >Online SQL Visualizer</h1>   
    <Helloworld/>
    <Upload/>
    </div>
  )
};

export default App;
