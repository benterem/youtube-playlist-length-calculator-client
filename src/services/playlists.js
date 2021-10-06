import axios from "axios"
const baseUrl = ''

const getPlaylistLength = (url) => {
  const request = axios.get(url)
  return request.then(response => response.data)
}

export default getPlaylistLength