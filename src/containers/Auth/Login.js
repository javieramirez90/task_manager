import useAppAuthState from '../../useAppState';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

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
    height: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function Login(props) {

  const { state, actions } = useAppAuthState();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    console.log(props)
    e.preventDefault()
    actions.login(values)
      props.props.history.push(`/profile`)

  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
      <TextField
        id="outlined-email-input"
        label="Username"
        className={classes.textField}
        name="username"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={handleChange('username')}
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
        name="password"
        fullWidth
      />
      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button}>
        Send
      </Button>
    </form>
  );
}