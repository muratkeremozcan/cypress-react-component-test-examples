import { useState } from 'react'
import copy from 'copy-to-clipboard'

export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState()

  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    return setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}
