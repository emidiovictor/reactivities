import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export const ActivityForm = () => {
  return (
    <div>
      <Segment clearing>
        <Form>
          <Form.Input placeholder="Title"></Form.Input>
          <Form.TextArea rows={2} placeholder="Description"></Form.TextArea>
          <Form.Input placeholder="Category"></Form.Input>
          <Form.Input type="date" placeholder="Date"></Form.Input>
          <Form.Input placeholder="City"></Form.Input>
          <Form.Input placeholder="Venue"></Form.Input>
          <Button floated="right" positive type="submit" content="Submit" />
          <Button floated="left" type="submit" content="Submit" />
        </Form>
      </Segment>
    </div>
  );
};
