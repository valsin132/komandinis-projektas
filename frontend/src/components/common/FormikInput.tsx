import { Field, ErrorMessage } from "formik";
import Input from "./Input";
import styles from "./Input.module.scss";

interface FormikFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const FormikField = ({ name, ...props }: FormikFieldProps) => {
  return (
    <div>
      <Field name={name} as={Input} {...props} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default FormikField;
