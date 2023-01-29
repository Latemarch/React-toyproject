import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import styles from './Videos.module.css'
import { useYoutubeApi } from '../context/YoutubeApiContext'

export default function Videos() {
  const { keyword } = useParams()
  const { youtube } = useYoutubeApi()
  const { isLoading, error, data: videos } = useQuery(['videos', keyword], () =>
    youtube.search(keyword),
  )
  console.log(videos)
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
