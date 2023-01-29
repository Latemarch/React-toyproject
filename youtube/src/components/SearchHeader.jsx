import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

import { BsYoutube, BsSearch } from 'react-icons/bs'
import styles from './SearchHeader.module.css'

export default function SearchHeader() {
  const { keyword } = useParams()
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }

  useEffect(() => setText(keyword || ''), [keyword])
  return (
    <header className={styles.header}>
      <div>
        <Link to="/" className={styles.link}>
          <BsYoutube className={styles.icon} />
          <h1>Youtube</h1>
        </Link>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        ></input>
        <button className={styles.button}>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}
