import axios from 'axios'

export default class FakeyoutubeClient {
  constructor() {}

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get('/videos/search.json')
      : axios.get('/videos/search.json')
  }
  async videos() {
    return axios.get('/videos/popular.json')
  }
  async channels() {
    return axios.get('/videos/channel.json')
  }
}
