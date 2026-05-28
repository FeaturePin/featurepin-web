'use client'

export default function CookieSettingsLink() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.dispatchEvent(new Event('openCookieSettings'))
  }

  return <a href="#" onClick={handleClick}>Cookies</a>
}
