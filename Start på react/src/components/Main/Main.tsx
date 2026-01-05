import './main.css'
import { Hilsen } from '../Hilsen/hilsen.jsx'
import { useEffect } from 'react'

export const Main = () => {
  useEffect(() => {
    const prevBg = document.body.style.backgroundColor
    const prevColor = document.body.style.color
    document.body.style.backgroundColor = '#0b1220' // match side-baggrund
    document.body.style.color = '#e5e7eb'
    return () => {
      document.body.style.backgroundColor = prevBg
      document.body.style.color = prevColor
    }
  }, [])

  return (
    <main style={{ backgroundColor: '#0f172a', color: '#e5e7eb', width: '100%', margin: 0 }}>
      <p>Hej verden</p>
      <Hilsen name="Peter" />
      <Hilsen name="Sara" />
      <Hilsen name="Mikkel" />
    </main>
  )
}
