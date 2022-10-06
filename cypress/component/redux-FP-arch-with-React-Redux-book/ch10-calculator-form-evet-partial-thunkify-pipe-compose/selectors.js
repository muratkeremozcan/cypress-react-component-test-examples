function computeLoan({ loanRequest }) {
  const amount = Number.parseInt(loanRequest.amount)
  const term = Number.parseInt(loanRequest.term)
  const interest = Number.parseInt(loanRequest.interest)

  const totalInterest = (amount * term * interest) / 100
  const totalPaid = amount + totalInterest

  return Object.freeze({
    totalInterest,
    totalPaid
  })
}
export { computeLoan }
