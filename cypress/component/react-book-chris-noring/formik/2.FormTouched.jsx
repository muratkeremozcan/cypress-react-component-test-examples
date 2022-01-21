import { Formik } from 'formik'
import React from 'react'

// initialValues: Formik attribute for life cycle of inputs. Give it an object representing our Form input values
// onSubmit: form attribute for submit event
// onChange: input attribute for change event

// form validation: define the validate attribute on the Formik component,
/// it expects a function that returns an object with a mapping of our errors
// in our form template, show the errors if it’s set

const FormTouched = () => (
  <Formik
    initialValues={{ name: '', address: '' }}
    onSubmit={(values) => console.log('submitting ', values)}
    validate={(values) => {
      let errors = {}
      if (!values.name) {
        errors.name = 'Name is required'
      }
      if (!values.address) {
        errors.address = 'Address is required'
      }

      return errors
    }}
  >
    {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.name && touched.name && (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* it seems that whether we explicitly handleBlur or not, Formik always handles the blur  */}

        <div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {errors.address}
            </span>
          )}
        </div>

        <button data-cy="submit">Submit</button>
      </form>
    )}
  </Formik>
)

export default FormTouched
