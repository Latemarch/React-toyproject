import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { search } from '../apis/youtube'

export default function Videos() {
  const { keyword } = useParams()
  const { isLoading, error, data: videos } = useQuery(['videos', keyword], () =>
    search(keyword),
  )
  return (
    <>
      <div>Video {keyword ? `${keyword}` : 'hot'}</div>
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
