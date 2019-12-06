import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activitity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color="blue"
            onClick={() => setEditMode(true)}
            content="Edit"
          />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
