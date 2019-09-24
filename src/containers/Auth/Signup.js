import useAppAuthState from '../../useAppState';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const courses = [
  {
    value: 'ux_ui',
    label: 'UX/UI',
  },
  {
    value: 'web_development',
    label: 'Web Development',
  },
  {
    value: 'data',
    label: 'Data Analytics',
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function Signup(props) {

  const { state, actions } = useAppAuthState();

  const classes = useStyles();

  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    course: '',
  });

  const handleSubmit = e => {
    console.log(values)
    e.preventDefault()
    actions.signup(values)
    props.props.history.push(`/profile`)
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
      <TextField
        id="outlined-name"
        label="Username"
        className={classes.textField}
        fullWidth
        onChange={handleChange('username')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        fullWidth
        onChange={handleChange('email')}
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={handleChange('password')}
      />
      <TextField
        id="outlined-password-input"
        label="Repeat Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={handleChange('password2')}
      />
      <TextField
        id="outlined-select-currency"
        select
        fullWidth
        label="Course"
        className={classes.textField}
        value={values.course}
        onChange={handleChange('course')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Select the course you are enrolled in"
        margin="normal"
        variant="outlined"
      >
        {courses.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button}>
        Send
      </Button>
    </form>
  );
}

