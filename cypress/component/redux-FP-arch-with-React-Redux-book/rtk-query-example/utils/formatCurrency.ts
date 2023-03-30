export const formatCurrency = (value: number, currencyCode = 'USD'): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  })
  return formatter.format(value / 100)
}
