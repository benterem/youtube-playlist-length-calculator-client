import axios from "axios"
const baseUrl = ''

const getPlaylistLength = () => {
  return axios.get(baseUrl)
}

export default getPlaylistLength