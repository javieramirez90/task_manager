import useAppState from '../../utils/taskFunc';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const TaskForm = () => {
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

  const { state, actions } = useAppState();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: '',
    description: '',
    doneyet: false
  });

  const handleSubmit = e => {
    console.log("e")
    // e.preventDefault()
    actions.create_task(values)
      // props.props.history.push(`/profile`)

  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
      <TextField
        id="outlined-title-input"
        label="Title"
        className={classes.textField}
        name="title"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={handleChange('title')}
      />
      <TextField
        id="outlined-description-input"
        label="Description"
        className={classes.textField}
        name="description"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={handleChange('description')}
        fullWidth
      />
      <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.button}>
        Save
      </Button>
    </form>
  );
}

export default TaskForm;
