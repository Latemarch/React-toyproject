import { useContext, createContext } from 'react'
import FakeyoutubeClient from '../apis/fakeYoutubeClient'
import YoutubeClient from '../apis/youtubeClient'
import Youtube from '../apis/youtube'

export const YoutubeApiContext = createContext()

// const client = new FakeyoutubeClient()
const client = new YoutubeClient()
const youtube = new Youtube(client)
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}
