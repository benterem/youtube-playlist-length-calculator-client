import { useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <div className='page-title'>
      <h1>Youtube Playlist Length Calculator</h1>
    </div>
  )
}

const Description = () => {
  
  return (
    <div className='description'>
      <p>
        <strong>How it works:</strong> enter a youtube playlist url, such as <a href='https://www.youtube.com/playlist?list=PLD72Ylz-Y01vcGTYmEaN9nz02o0yZMWy8'>https://www.youtube.com/playlist?list=PLD72Ylz-Y01vcGTYmEaN9nz02o0yZMWy8</a>
      </p>
    </div>
  )
}



const App = () => {

 


  return (
    <>
      <Header />
      <Description />
    </>
  )
}

export default App;
