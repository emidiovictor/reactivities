import React, { useState, useEffect } from "react";
import { Header, Icon, List, Container } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activitity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashBoard } from "../../features/activitites/dashboard/ActivityDashBoard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(x => x.id === id)[0]);
  };
  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard
          activities={activities}
          selectActivity={handleSelectedActivity}
          selectedActivity={selectedActivity!}
        />
      </Container>
    </>
  );
};

export default App;
