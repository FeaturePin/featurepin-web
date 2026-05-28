'use client'

import { useState, useEffect } from 'react'

const COOKIE_NAME = '__cookie_consent'
const COOKIE_DAYS = 365
const IGNORED_PATHS = ['/privacy', '/terms']

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`
}

export default function CookieConsent() {
  const [showAlert, setShowAlert] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    const isIgnored = IGNORED_PATHS.some(p => path.startsWith(p))
    if (!isIgnored && !getCookie(COOKIE_NAME)) {
      setShowAlert(true)
    }

    const handleOpenSettings = () => {
      setShowAlert(false)
      setShowSettings(true)
    }
    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const handleAccept = () => {
    setCookie(COOKIE_NAME, 'true', COOKIE_DAYS)
    setShowAlert(false)
    setShowSettings(false)
  }

  const handleSave = () => {
    setCookie(COOKIE_NAME, analytics ? 'analytics' : 'essential', COOKIE_DAYS)
    setShowAlert(false)
    setShowSettings(false)
  }

  const openSettings = () => {
    setShowAlert(false)
    setShowSettings(true)
  }

  const closeSettings = () => {
    setShowSettings(false)
    setShowAlert(true)
  }

  if (!showAlert && !showSettings) return null

  return (
    <>
      {showSettings && <div className="cc-backdrop" />}

      {showAlert && (
        <div className="cc-bar" role="dialog" aria-labelledby="cc-bar-label" aria-modal="true">
          <div className="cc-bar__content">
            <p id="cc-bar-label" className="cc-bar__text">
              FeaturePin uses essential cookies to keep the site working.{' '}
              <a href="/privacy/">Privacy policy</a>.
            </p>
            <div className="cc-bar__actions">
              <button type="button" className="btn btn-ghost btn-sm" onClick={openSettings}>Manage</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleAccept}>Accept</button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="cc-modal" role="dialog" aria-labelledby="cc-modal-label" aria-modal="true">
          <button className="cc-modal__close" type="button" onClick={closeSettings} aria-label="Close">×</button>
          <div className="cc-modal__content">
            <h2 id="cc-modal-label" className="cc-modal__title">Cookie settings</h2>
            <p className="cc-modal__text">
              We use cookies to keep the site working. You can also allow analytics cookies.{' '}
              <a href="/privacy/">Privacy policy</a>.
            </p>

            <div className="cc-modal__accept-all">
              <button type="button" className="btn btn-primary btn-sm" onClick={handleAccept}>Accept all</button>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" disabled checked readOnly />
                <span>Essential cookies</span>
              </label>
              <p className="cc-section__text">Required for the site to function. Cannot be disabled.</p>
            </div>

            <div className="cc-section">
              <label className="cc-label">
                <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                <span>Analytics cookies</span>
              </label>
              <p className="cc-section__text">Help us understand how visitors use the site.</p>
            </div>
          </div>
          <div className="cc-modal__actions">
            <button type="button" className="btn btn-ghost btn-sm" onClick={closeSettings}>Cancel</button>
            <button type="button" className="btn btn-primary btn-sm" onClick={handleSave}>Save preferences</button>
          </div>
        </div>
      )}
    </>
  )
}
