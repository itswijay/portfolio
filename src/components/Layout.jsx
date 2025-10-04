import React from 'react'

const Layout = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-background p-32 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout