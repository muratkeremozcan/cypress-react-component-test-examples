import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// Yup replaces Formik's validate attribute

const FormikYup = () => (
  <Formik
    initialValues={{ name: '', address: '', email: '' }}
    onSubmit={(values) => console.log('submitting ', values)}
    validationSchema={Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too long!')
        .required('Name is required'),
      address: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too long!')
        .required('Address is required'),
      email: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too long!')
        .required('Email is required')
    })}
  >
    {({ values, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
          />
          <ErrorMessage name="name" />
        </div>
        <div>
          <Field
            name="address"
            type="text"
            placeholder="Address"
            value={values.address}
          />
          <ErrorMessage name="address" />
        </div>
        <div>
          <Field
            name="email"
            type="text"
            placeholder="email"
            value={values.email}
          />
          <ErrorMessage name="email" />
        </div>

        <button data-cy="submit">Submit</button>
      </Form>
    )}
  </Formik>
)

export default FormikYup
