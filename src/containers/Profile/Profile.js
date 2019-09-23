import useAppState from '../../utils/taskFunc';

import React from 'react';
import TasksList from '../TasksList/TasksList';


const Profile = () => {

  const { state, actions } = useAppState();

  const getTasks = () => {
    actions.get_tasks()
  }

  return (
    <div>
      <TasksList />
    </div>
  );
}

export default Profile;
