import React from 'react'
import { useLocation } from 'react-router-dom'
import ChannelInfo from '../components/ChannelInfo'
import RelatedVideos from '../components/RelatedVideos'
import styles from './VideoDetail.module.css'

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation()
  console.log(video)
  const { title, channelId, channelTitle, description } = video.snippet
  return (
    <section className={styles.container}>
      <article className={styles.container_detail}>
        <iframe
          className={styles.iframe}
          id="player"
          type="text/html"
          width="100%"
          height="650"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
        <div className={styles.chnnel_info}>
          <h2 className={styles.channel_info_title}>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className={styles.channel_info_description}>{description}</pre>
        </div>
      </article>
      <section className={styles.container_related}>
        <RelatedVideos id={channelId} name={channelTitle} />
      </section>
    </section>
  )
}
