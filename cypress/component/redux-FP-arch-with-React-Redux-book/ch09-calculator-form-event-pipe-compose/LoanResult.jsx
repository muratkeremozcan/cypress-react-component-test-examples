import { connect } from 'react-redux'
import { computeLoan } from './selectors'

function LoanResult({ loan }) {
  return (
    <div>
      <div data-cy="total-interest">Total Interest Paid: {loan.totalInterest}</div>
      <div data-cy="total-paid">Total Amount Paid: {loan.totalPaid} </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    loan: computeLoan(state)
  }
}

export default connect(mapStateToProps)(LoanResult)
