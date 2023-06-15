import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('La confirmación de contraseña es requerida'),
  });

  return (
    
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={async (values, { setSubmitting }) => {
      await new Promise((r) => setTimeout(r, 1000));
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}>
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
      <Form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
          {errors.confirmPassword && touched.confirmPassword && <div>{errors.confirmPassword}</div>}
        </div>

        <button type="submit">Registrarse</button>
      </Form>
                    )
            }
    </Formik>
  );
};

export default RegisterForm;
