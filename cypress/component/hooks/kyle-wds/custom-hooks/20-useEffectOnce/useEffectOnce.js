import { useEffect } from 'react'

export default function useEffectOnce(cb) {
  return useEffect(cb, [])
}
