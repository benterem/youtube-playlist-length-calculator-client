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

const URLForm = ({ title, url, handleSubmit, onChange }) => {

  return (
    <div className='url-form'>
      <form onSubmit={handleSubmit}>
        <label>{title}</label>
        <input 
          type='text'
          required
          value={url}
          onChange={onChange}
        />
        <button type='submit'>Calculate</button>
      </form>
    </div>
  )
}

const App = () => {

  const [url, setURL ] = useState('') 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('hey there')
  }


  return (
    <>
      <Header />
      <Description />
      <URLForm title={'url'} url={url} handleSubmit={handleSubmit} onChange={(e) => setURL(e.target.value)}/>
    </>
  )
}

export default App;
