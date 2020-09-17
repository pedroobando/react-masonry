import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Tab } from "semantic-ui-react";
import styled from "styled-components";
import Masonry from "react-masonry-component";

const Content = styled(Masonry)`
  min-height: 80vh;

  & > img {
    margin: 1%;
    width: ${(props) => (100 - 2 * props.columns) / props.columns}%;
  }
`;

const Gallery = ({ stringGal }) => {
  let pictures = [];
  for (let i = 0; i < 10; i++) {
    let height = Math.floor(Math.random() * 400 + 400);
    let width = Math.floor(Math.random() * 400 + 400);
    pictures.push(
      <img
        src={`https://source.unsplash.com/random/${height}x${width}`}
        key={`${stringGal}${i}`}
        alt=""
      />
    );
  }

  return (
    <Tab.Pane attached={false}>
      <Content columns={3}>{pictures.map((picture) => picture)}</Content>
    </Tab.Pane>
  );
};

export const App = () => (
  <React.Fragment>
    <Tab
      renderActiveOnly={false}
      menu={{ secondary: true, pointing: true }}
      panes={[
        { menuItem: "Tab 1", pane: { content: <Gallery stringGal={"galA"} /> } },
        { menuItem: "Tab 2", pane: { content: <Gallery stringGal={"galB"} /> } },
        { menuItem: "Tab 3", pane: { content: <Gallery stringGal={"galC"} /> } },
      ]}
    />
  </React.Fragment>
);
