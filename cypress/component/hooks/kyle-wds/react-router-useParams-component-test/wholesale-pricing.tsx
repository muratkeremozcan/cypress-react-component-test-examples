import { useParams } from 'react-router-dom'

export const WholesalePricing = () => {
  const { storeId, planId } = useParams<{ storeId: string; planId: string }>()

  return (
    <>
      <div data-cy="plan-id">
        Plan ID:{' '}
        <a href={`/admin/plans/${planId}`} target="_blank" rel="noreferrer">
          {planId}
        </a>
      </div>
      <div data-cy="store-id">
        Store ID:{' '}
        <a href={`/admin/stores/${storeId}`} target="_blank" rel="noreferrer">
          {storeId}
        </a>
      </div>
    </>
  )
}
