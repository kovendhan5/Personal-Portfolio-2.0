"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // You can add your preferred analytics service here
    console.log(`Page view: ${pathname}${searchParams}`)
  }, [pathname, searchParams])

  return null
}

