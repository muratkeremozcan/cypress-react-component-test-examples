import * as React from 'react'
import { Trans } from 'react-i18next'

// See ./App.tsx for localization setup
export function LocalizedComponent({ name, count }) {
  return (
    <Trans
      i18nKey={count === 1 ? 'userMessagesUnread' : 'userMessagesUnread_plural'}
      count={count}
    >
      Hello <strong> {{ name }} </strong>, you have {{ count }} unread message{' '}
    </Trans>
  )
}
