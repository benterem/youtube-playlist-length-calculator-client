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

export default URLForm