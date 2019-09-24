import useAppAuthState from "../../useAppState";

import React from "react";
import TasksList from "../TasksList/TasksList";

const Profile = () => {
  const { state, actions } = useAppAuthState();

  console.log(state);

    if (actions.loggedin() == 403) {
      return <div>You are not loggedin.</div>;
    } else {
      return (
        <div>
          <TasksList />
        </div>
      );
    }
  
};

export default Profile;
