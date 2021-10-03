import { useState } from "react"

const Result = ({ playlistData, url }) => {

  const [timeInSeconds, setTimeInSconds] = useState(playlistData.totalTime)
  const [timeToDisplay, setTimeToDisplay] = useState(0)

  const formatLength = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = Math.floor(timeInSeconds % 3600) % 60
    return {hours, minutes, seconds}
  }

  const handleSelect = (speed) => {
    setTimeToDisplay(timeInSeconds / speed)
    formatLength(timeToDisplay)
    console.log(timeToDisplay, timeToDisplay)
  }

  if(Object.entries(playlistData).length){
    return <></>
  }

  return (
    <div className='result-container'>

      <select
        value={temp}
        onChange={(e) => handleSelect(e.target.value)}
        >
        <option value={1.0}>1.0</option>
        <option value={1.25}>1.25</option>
        <option value={1.5}>1.5</option>
        <option value={1.75}>1.75</option>
        <option value={2.0}>2.0</option>
      </select>

      <p>
        There are {playlistData.numberOfVideos} videos
      </p>
      <p>
        Total playlist length: {playlistData.hours} hours, {playlistData.minutes} minutes, {playlistData.seconds} seconds
      </p>
      <p>
        Approximately {playlistData.approx}
      </p>
      <p>
        Go to the playlist: {url}
      </p>
    </div>
  )
}

export default Result