import { Formik } from 'formik'
import React from 'react'

// initialValues: Formik attribute for life cycle of inputs.
/// Give it an object representing our Form input values
// * onSubmit: form attribute for submit event
// * onChange: input attribute for change event

// form validation: define the validate attribute on the Formik component,
/// it expects a function that returns an object with a mapping of our errors
// in our form template, show the errors if it’s set

const FirstExample = () => (
  <Formik
    initialValues={{ name: '' }}
    onSubmit={(values) => console.log('submitting ', values)}
    validate={(values) => {
      let errors = {}
      if (!values.name) {
        errors.name = 'Name is required'
      }
      return errors
    }}
  >
    {({ values, errors, handleSubmit, handleChange }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {errors.name}
            </span>
          )}
        </div>

        <button data-cy="submit">Submit</button>
      </form>
    )}
  </Formik>
)

export default FirstExample
