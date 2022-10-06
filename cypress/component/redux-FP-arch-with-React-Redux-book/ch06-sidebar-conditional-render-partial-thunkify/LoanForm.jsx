import { pipe, compose } from 'lodash/fp'
import { partial } from 'lodash'
import { connect } from 'react-redux'
import { submitLoanRequest, changeLoanRequest } from './actions'
import thunkify from 'thunkify'

const preventDefault = (e) => {
  e.preventDefault()
  return e
}

function LoanForm({ loanRequest, submitLoanRequest, changeLoanRequest }) {
  // KEY: FP tricks: 3 versions of taking a form event, extracting the form data, and submitting it
  // https://github.com/lodash/lodash/wiki/FP-Guide

  const handleChange = (e) => {
    const change = Object.freeze({
      name: e.target.name,
      value: e.target.value
    })

    return changeLoanRequest(change)
  }

  // [redux6] KEY: FP tricks: partial, thunkify
  // const partialSubmit = () => submitLoanRequest(loanRequest) // fn returns a fn invocation
  const partialSubmit = partial(submitLoanRequest, loanRequest) // partial
  // const partialSubmit = thunkify(submitLoanRequest)(loanRequest) // thunkify

  // KEY: FP tricks: pipe, compose
  // const handleSubmit = (e) => {
  //   preventDefault(e)
  //   return partialSubmit()
  // }
  // const handleSubmit = compose(partialSubmit, preventDefault) // compose
  const handleSubmit = pipe(preventDefault, partialSubmit) // pipe

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Loan amount</label>
        <input
          data-cy="amount"
          name="amount"
          type="number"
          value={loanRequest.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="term">Loan term in years</label>
        <input
          data-cy="term"
          name="term"
          type="number"
          value={loanRequest.term}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="interest">Interest rate per year</label>
        <input
          data-cy="interest"
          name="interest"
          type="number"
          value={loanRequest.interest}
          onChange={handleChange}
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
function mapState({ loanRequestInput }) {
  return {
    loanRequest: loanRequestInput
  }
}

export default connect(mapState, { submitLoanRequest, changeLoanRequest })(LoanForm)
