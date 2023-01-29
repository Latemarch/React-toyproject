import React from 'react'
import { formatAgo } from '../util/Date'
import styles from './VideoCard.module.css'

export default function VideoCard({ video }) {
  const { publishedAt, title, thumbnails, channelTitle } = video.snippet
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.timeAgo}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  )
}
