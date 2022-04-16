import React from 'react'
import './index.css'

interface CardProps {
  children: React.ReactNode,
  className: string,
}

function Card ({ children, className }: CardProps) {
  const classNames = `card ${className}`
  return (
    <div className={classNames}>
      { children }
    </div>
  )
}

export default Card
