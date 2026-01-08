import React from 'react'
import './dynamisk-knap.css'

type ButtonProps = {
  action: () => void
  size: 'small' | 'medium' | 'large'
  theme: 'light' | 'dark'
  text: string
}

export const Button: React.FC<ButtonProps> = ({ action, size, theme, text }) => {
  const className = `btn btn--${size} btn--${theme}`
  return (
    <button type="button" className={className} onClick={action}>
      {text}
    </button>
  )
}

const DynamiskKnapDemo: React.FC = () => {
  const alert1 = () => alert('Første knap klikket!')
  const alert2 = () => alert('Anden knap klikket!')
  const alert3 = () => alert('Tredje knap klikket!')

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      <Button action={alert1} size="small" theme="light" text="Lille, lys knap" />
      <Button action={alert2} size="medium" theme="dark" text="Mellem, mørk knap" />
      <Button action={alert3} size="large" theme="light" text="Stor, lys knap" />
    </div>
  )
}

export default DynamiskKnapDemo
