import React from 'react'
import { useQuery } from '@tanstack/react-query'

export default function ChannelInfo({ id, name }) {
  // const { error, isLoading, data: url } = useQuery(
  //   ['channel',id], ()=>
  // )
  return <div>{name}</div>
}
