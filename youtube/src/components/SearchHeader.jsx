import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsYoutube, BsSearch } from 'react-icons/bs'
import './SearchHeader.module.css'

export default function SearchHeader() {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." value={text}></input>
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}
