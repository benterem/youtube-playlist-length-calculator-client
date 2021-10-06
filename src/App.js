import { useEffect, useState } from 'react'
import './App.css';
import Result from './components/Result'
import getPlaylistLength from './services/playlists'

const Header = () => {
  return (
    <div className='page-title-container'>
      <h1>Youtube Playlist Length Calculator</h1>
    </div>
  )
}

const Description = () => {
  
  return (
    <div className='description-container'>
      <p className='description-paragraph'>
        <strong>How it works:</strong> enter a youtube playlist url, such as <a href='https://www.youtube.com/playlist?list=PLD72Ylz-Y01vcGTYmEaN9nz02o0yZMWy8'>https://www.youtube.com/playlist?list=PLD72Ylz-Y01vcGTYmEaN9nz02o0yZMWy8</a>
      </p>
    </div>
  )
}

const URLForm = ({ url, handleSubmit, onChange }) => {

  return (
    <div className='url-form'>
      <form onSubmit={handleSubmit} className='url-form-element'>
        <input 
          type='text'
          required
          placeholder='Enter your url here'
          value={url}
          onChange={onChange}
          className='url-input'
        />
        <button type='submit' className='url-form-btn'>Calculate</button>
      </form>
    </div>
  )
}



const App = () => {

  const [url, setURL ] = useState('')
  const [playlistData, setPlayListData] = useState({})


  const handleSubmit = (event) => {
    event.preventDefault()
    getPlaylistLength(url)
    .then(playlistDataFromServer => {
      setPlayListData(playlistDataFromServer)
    })
    .catch(error => console.log('couldn\'t get data'))
  }

  const formatLength = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = Math.floor(timeInSeconds % 3600) % 60
    const approxInMinutes = Math.floor(timeInSeconds / 60)
    return {hours, minutes, seconds, approxInMinutes}
  }

  const formattedLength = formatLength(26084)

  return (
    <>
      <Header />
      <Description />
      <URLForm url={url} handleSubmit={handleSubmit} onChange={(e) => setURL(e.target.value)}/>
      <Result url={url} playlistData={playlistData} formatLength={formatLength}/>
    </>
  )
}

export default App;
