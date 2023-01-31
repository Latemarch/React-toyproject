import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import styles from './Videos.module.css'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import VideoCard from '../components/VideoCard'

export default function Videos() {
  const { keyword } = useParams()
  const { youtube } = useYoutubeApi()
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyword],
    () => youtube.search(keyword),
    { staleTime: 1000 * 60 * 1 },
  )
  return (
    <>
      {/* <div>Video {keyword ? `${keyword}` : 'hot'}</div> */}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  )
}
