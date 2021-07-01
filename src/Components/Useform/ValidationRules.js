export default function validate(values) {
    let errors = {};
    if (!values.username) {
        errors.username = 'Firstname is required';
      }
      if (!values.username) {
        errors.username1 = 'Lastname is required';
      }
      if (!values.username) {
        errors.username2 = 'Username is required';
      }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };