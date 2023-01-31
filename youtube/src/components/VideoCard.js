import React from 'react'
import { formatAgo } from '../util/Date'
import styles from './VideoCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function VideoCard({ video, related }) {
  const { publishedAt, title, thumbnails, channelTitle } = video.snippet
  const navigate = useNavigate()
  return (
    <li
      className={related ? styles.card : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }}
    >
      <img
        className={related ? styles.img : ''}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.timeAgo}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  )
}
