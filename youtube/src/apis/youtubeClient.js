import axios from 'axios'
console.log('api', process.env.REACT_APP_API)

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_API },
    })
  }

  async search(params) {
    return this.httpClient.get('search', params)
  }
  async videos(params) {
    return this.httpClient.get('videos', params)
  }
}
