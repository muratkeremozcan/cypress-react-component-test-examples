import { pipe, compose } from 'lodash/fp'
import { connect } from 'react-redux'
import { submitLoanRequest } from './actions'

const preventDefault = (e) => {
  e.preventDefault()
  return e
}

const extractFormData = (e) => {
  const formData = new FormData(e.target)
  const object = {}
  // map the formData to an object, using FormData's forEach method
  formData.forEach(function (value, key) {
    object[key] = value
  })
  return Object.freeze(object)
}

function LoanForm({ loanRequest, submitLoanRequest }) {
  // [redux6]KEY: FP tricks: 3 versions of taking a form event, extracting the form data, and submitting it
  // https://github.com/lodash/lodash/wiki/FP-Guide

  // const handleSubmit = (e) => {  // 1. imperative version
  //   const event = preventDefault(e)
  //   const _state = extractFormData(event)
  //   return submitLoanRequest(_state)
  // }
  // const handleSubmit = (e) => submitLoanRequest(extractFormData(preventDefault(e)))  // single line version
  // const handleSubmit = compose(submitLoanRequest, extractFormData, preventDefault) // compose
  const handleSubmit = pipe(preventDefault, extractFormData, submitLoanRequest) // pipe

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Loan amount</label>
        <input
          data-cy="amount"
          name="amount"
          type="number"
          defaultValue={loanRequest.amount}
          required
        />
      </div>
      <div>
        <label htmlFor="term">Loan term in years</label>
        <input data-cy="term" name="term" type="number" defaultValue={loanRequest.term} required />
      </div>
      <div>
        <label htmlFor="interest">Interest rate per year</label>
        <input
          data-cy="interest"
          name="interest"
          type="number"
          defaultValue={loanRequest.interest}
          required
        />
      </div>
      <div>
        <button data-cy="calculate" type="submit">
          Calculate
        </button>
      </div>
    </form>
  )
}

function mapStateToProps(loanRequest) {
  return { loanRequest }
}

export default connect(mapStateToProps, { submitLoanRequest })(LoanForm)
