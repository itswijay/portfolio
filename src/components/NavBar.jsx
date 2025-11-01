'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { GitHubIcon, LinkedinIcon } from './Icons'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const SidebarLink = ({ href, title, onClick, delay }) => {
  const pathname = usePathname()
  const isActive = pathname.asPath === href

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          group relative block w-full px-4 py-3 rounded-xl overflow-hidden
          transition-all duration-300 ease-out
          ${
            isActive
              ? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5'
              : 'text-foreground/80 hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-border/30'
          }
        `}
      >
        {/* Background gradient effect */}
        <div
          className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-r from-primary/5 via-primary/3 to-transparent
          ${isActive ? 'opacity-100' : ''}
        `}
        />

        {/* Content */}
        <div className="relative flex items-center justify-between">
          <span className="text-sm font-medium">{title}</span>

          {/* Arrow indicator - only show on hover for non-active items */}
          {!isActive && (
            <motion.div
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-muted-foreground/40 scale-0 group-hover:scale-100"
              whileHover={{ scale: 1.2 }}
            />
          )}
        </div>

        {/* Bottom border effect - only show on hover for non-active items */}
        {!isActive && (
          <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300 bg-primary/50 scale-x-0 group-hover:scale-x-100" />
        )}
      </Link>
    </motion.div>
  )
}

const CustomLink = ({ href, title, className = '' }) => {
  const pathname = usePathname()
  const isActive = pathname.asPath === href

  return (
    <Link
      href={href}
      className={`${className} relative group py-2 px-4 rounded-full overflow-hidden text-foreground/80 hover:text-foreground transition-all duration-300 hover:bg-muted/20`}
    >
      <motion.span
        className="relative z-10 inline-block font-medium"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {title}
      </motion.span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-primary/8 rounded-full border border-primary/15 backdrop-blur-sm"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}

      {/* Hover effect */}
      <span
        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out ${
          isActive ? 'w-6' : 'w-0 group-hover:w-6'
        }`}
      />
    </Link>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="w-full px-8 sm:px-10 lg:px-28 py-4 lg:py-6 font-medium flex items-center justify-between relative z-50">
        <Logo />

        {/* Modern Floating Navigation - Desktop */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex absolute left-[50%] translate-x-[-50%] items-center px-8 py-3 rounded-full backdrop-blur-lg bg-card/40 border border-border/10 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:shadow-black/[0.08] hover:bg-card/50 transition-all duration-500 ring-1 ring-white/5"
        >
          <div className="flex items-center space-x-8 lg:space-x-12">
            <CustomLink href="/" title="Home" />
            <CustomLink href="/about" title="About" />
            <CustomLink href="/projects" title="Projects" />
            <CustomLink href="/articles" title="Articles" />
          </div>
        </motion.nav>

        {/* Right side icons and hamburger */}
        <div className="flex items-center space-x-4">
          {/* Social Icons - Desktop Only */}
          <motion.a
            href="https://www.linkedin.com/in/pubudu-wijesundara/"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex w-10 h-10 items-center justify-center p-1 rounded-full hover:bg-muted/50 transition-colors duration-200"
          >
            <LinkedinIcon className="w-full h-full fill-current text-muted-foreground hover:text-foreground transition-colors duration-200" />
          </motion.a>

          <motion.a
            href="https://github.com/thewijay"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex w-10 h-10 items-center justify-center p-1 rounded-full hover:bg-muted/50 transition-colors duration-200"
          >
            <GitHubIcon className="w-full h-full fill-current text-muted-foreground hover:text-foreground transition-colors duration-200" />
          </motion.a>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1 rounded-full hover:bg-muted/50 transition-colors duration-200 z-50"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-foreground rounded-full origin-center"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                x: isOpen ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-foreground rounded-full"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-foreground rounded-full origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl shadow-black/10 z-50 md:hidden"
          >
            <div className="flex flex-col h-full justify-between pt-6 pb-6 px-6">
              <div>
                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-end mb-4"
                >
                  <button
                    onClick={closeMenu}
                    className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-all duration-200 group"
                    aria-label="Close menu"
                  >
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <span className="absolute w-5 h-0.5 bg-foreground rounded-full transform rotate-45" />
                      <span className="absolute w-5 h-0.5 bg-foreground rounded-full transform -rotate-45" />
                    </motion.div>
                  </button>
                </motion.div>

                {/* Theme Toggle in Sidebar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-6"
                >
                  <div className="p-2 rounded-xl bg-muted/30 border border-border backdrop-blur-sm shadow-md">
                    <ThemeToggle />
                  </div>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  <SidebarLink
                    href="/"
                    title="Home"
                    onClick={closeMenu}
                    delay={0.1}
                  />
                  <SidebarLink
                    href="/about"
                    title="About"
                    onClick={closeMenu}
                    delay={0.2}
                  />
                  <SidebarLink
                    href="/projects"
                    title="Projects"
                    onClick={closeMenu}
                    delay={0.3}
                  />
                  <SidebarLink
                    href="/articles"
                    title="Articles"
                    onClick={closeMenu}
                    delay={0.4}
                  />
                </div>
              </div>

              {/* Sidebar Footer - Always at bottom but visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col space-y-4 pt-6"
              >
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

                {/* Social Links Section */}
                <div className="text-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm text-muted-foreground mb-3 font-medium"
                  >
                    Connect with me
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center space-x-6 mb-4"
                  >
                    <motion.a
                      href="https://www.linkedin.com/in/pubudu-wijesundara/"
                      target={'_blank'}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group backdrop-blur-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-6 h-6 fill-current text-blue-600/80 group-hover:text-blue-600 transition-colors duration-200" />
                    </motion.a>

                    <motion.a
                      href="https://github.com/thewijay"
                      target={'_blank'}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group backdrop-blur-sm"
                      aria-label="GitHub Profile"
                    >
                      <GitHubIcon className="w-6 h-6 fill-current text-green-600/80 group-hover:text-green-600 transition-colors duration-200" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-center"
                >
                  <p className="text-xs text-muted-foreground/60 font-medium">
                    © 2025 Pubudu Wijesundara
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
