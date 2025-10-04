import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-border font-medium text-sm text-muted-foreground transition-colors duration-300">
      <div className="w-full px-8 sm:px-16 lg:px-32 py-2 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <span>
          &copy; {new Date().getFullYear()} Pubudu Wijesundara. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
