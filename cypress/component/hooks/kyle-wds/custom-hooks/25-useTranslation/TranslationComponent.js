import useTranslation from './useTranslation'

export default function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

  return (
    <>
      <div>{language}</div>
      <div>{t('hi')}</div>
      <div>{t('bye')}</div>
      <div>{t('nested.value')}</div>
      <div>{t('')}</div>
      <button data-cy="spanish" onClick={() => setLanguage('sp')}>
        Change To Spanish
      </button>
      <button data-cy="english" onClick={() => setLanguage('en')}>
        Change To English
      </button>
      <button data-cy="fallback-lang" onClick={() => setFallbackLanguage('en')}>
        Change FB Lang
      </button>
    </>
  )
}
