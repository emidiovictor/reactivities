import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivitites
        </Menu.Item>

        <Menu.Item name="friends" />
        <Menu.Item name="Activities">
          <Button positive onClick={openCreateForm}>
            Add activities
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
