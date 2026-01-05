import './main.css'
import { Hilsen } from '../Hilsen/Hilsen.jsx'

export const Main = () => {
  return (
    <main>
      <p>Hej verden</p>
      <Hilsen name="Peter" />
      <Hilsen name="Sara" />
      <Hilsen name="Mikkel" />
    </main>
  )
}
