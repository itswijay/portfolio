import React from 'react'

const Layout = React.memo(({ children, className = '' }) => {
  return (
    <div
      className={`w-full max-w-full block z-0 bg-background py-8 px-8 md:px-16 lg:px-24 xl:px-32 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
