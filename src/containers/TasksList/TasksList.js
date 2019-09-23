import useAppState from '../../utils/taskFunc';

import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import SpringModal from '../../components/UI/ProfileModal/ProfileModal';

const useStyles = makeStyles(theme => ({
  root: {
    width: "75%",
    // maxWidth: ,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    width: "100%"
  }, fab: {
    margin: theme.spacing(1),
  },
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: "80%"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const TasksList = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [hasError, setErrors] = useState(false);
  const [tasks, setTasks] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3000/api/tasks");
    res
      .json()
      .then(res => setTasks(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  // function createData(task, done) {
  //   return { task, done };
  // }
  let rows =
    tasks.length > 1 ? (
      tasks.map(task => {
        const labelId = `checkbox-list-secondary-label-${task}`;
        return (
          <StyledTableRow key={task._id}>
            <ListItem button>
              <div>
                <StyledTableCell align="right">
                  <ListItemIcon>
                    <AssignmentTurnedInIcon />
                  </ListItemIcon>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <ListItemText
                    id={labelId}
                    primary={task.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {task.description}
                        </Typography>
                        {}
                      </React.Fragment>
                    }
                  />
                </StyledTableCell>

                <StyledTableCell align="right">
                  <ListItemSecondaryAction>
                    <Checkbox
                      // edge="end"
                      onChange={handleToggle(task)}
                      checked={checked.indexOf(task) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />

                    <IconButton aria-label="delete">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </StyledTableCell>
              </div>
            </ListItem>
          </StyledTableRow>
        );
      })
    ) : (
      <StyledTableRow>Loading...</StyledTableRow>
    );

  return (
    <div style={{display: "flex", flexWrap: 'wrap' , justifyContent: "center"}}>

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Task (name / description)</StyledTableCell>
            <StyledTableCell align="right">Done</StyledTableCell>
            <StyledTableCell align="right">Edit&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </Paper>
      <SpringModal />
    </div>
  );
};
export default TasksList;
