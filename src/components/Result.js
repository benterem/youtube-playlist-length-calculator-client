import { useState } from "react"
import './Result.css'

const Result = ({ playlistData, url, formatLength }) => {

  console.log(playlistData, url)

  const [timeInSeconds, _ ] = useState(playlistData.totalTime)
  const [formattedLength, setFormattedLength] = useState(playlistData.formattedLength)

  const handleSelect = (speed) => {
    setFormattedLength(formatLength(timeInSeconds / speed))
  }


  return (
    <div className='result-container'>

      <select
        value={timeInSeconds}
        onChange={
          (e) => handleSelect(e.target.value)
        }
        >
        <option value={1.0}>Pick playback speed</option>
        <option value={1.0}>1.0</option>
        <option value={1.25}>1.25</option>
        <option value={1.5}>1.5</option>
        <option value={1.75}>1.75</option>
        <option value={2.0}>2.0</option>
      </select>

      <p>
        <strong>Total playlist length:</strong> {formattedLength.hours} hours, {formattedLength.minutes} minutes, {formattedLength.seconds} seconds
      </p>
      <p>
        Approximately {formattedLength.approxInMinutes} minutes
      </p>

    </div>
  )
}

export default Result