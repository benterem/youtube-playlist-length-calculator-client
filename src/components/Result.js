import { useState } from "react"

const Result = ({ playlistData, url, formatLength }) => {

  console.log(playlistData, url)

  const [timeInSeconds, setTimeInSconds] = useState(playlistData.totalTime)
  const [timeToDisplay, setTimeToDisplay] = useState(playlistData.totalTime)
  const [formattedLength, setFormatedLength] = useState(playlistData.formattedLength)

  // const formatLength = (timeInSeconds) => {
  //   const hours = Math.floor(timeInSeconds / 3600)
  //   const minutes = Math.floor((timeInSeconds % 3600) / 60)
  //   const seconds = Math.floor(timeInSeconds % 3600) % 60
  //   const approxInMinutes = Math.floor(timeInSeconds / 60)
  //   return {hours, minutes, seconds, approxInMinutes}
  // }

  const handleSelect = (speed) => {
    setTimeToDisplay(timeInSeconds / speed)
    setFormatedLength(formatLength(timeToDisplay))
  }

  // if(Object.entries(playlistData).length){
  //   return <></>
  // }

  return (
    <div className='result-container'>

      <select
        value={timeInSeconds}
        onChange={(e) => handleSelect(e.target.value)}
        >
        <option value={1.0}>Pick playback speed</option>
        <option value={1.0}>1.0</option>
        <option value={1.25}>1.25</option>
        <option value={1.5}>1.5</option>
        <option value={1.75}>1.75</option>
        <option value={2.0}>2.0</option>
      </select>

      <p>
        Total playlist length: {formattedLength.hours} hours, {formattedLength.minutes} minutes, {formattedLength.seconds} seconds
      </p>
      <p>
        Approximately {formattedLength.approxInMinutes} minutes
      </p>
      <p>
        Go to the playlist: {url}
      </p>
    </div>
  )
}

export default Result