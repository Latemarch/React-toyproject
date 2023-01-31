import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import styles from './ChannelInfo.module.css'

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi()
  const { error, isLoading, data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 },
  )
  return (
    <div className={styles.div}>
      {url && <img className={styles.img} src={url} alt={name} />}
    </div>
  )
}
