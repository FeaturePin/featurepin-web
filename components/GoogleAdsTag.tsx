'use client'

import { useEffect } from 'react'

const COOKIE_NAME = '__cookie_consent'
const GOOGLE_ADS_ID = 'AW-18347071563'
const SCRIPT_ID = 'google-ads-tag'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function hasAnalyticsConsent() {
  const consent = getCookie(COOKIE_NAME)
  return consent === 'true' || consent === 'analytics'
}

function loadGoogleAdsTag() {
  if (window.gtag || document.getElementById(SCRIPT_ID)) return

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GOOGLE_ADS_ID)

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`
  document.head.appendChild(script)
}

export default function GoogleAdsTag() {
  useEffect(() => {
    const maybeLoad = () => {
      if (hasAnalyticsConsent()) loadGoogleAdsTag()
    }

    maybeLoad()
    window.addEventListener('cookieConsentUpdated', maybeLoad)
    return () => window.removeEventListener('cookieConsentUpdated', maybeLoad)
  }, [])

  return null
}
