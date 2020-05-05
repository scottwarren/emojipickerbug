import React from "react";
import styled from "styled-components";
import { Picker as EmojiMartPicker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import "./App.css";

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 50%;
`;

function App() {
  return (
    <Container>
      <Column>
        <h3>With Native Prop</h3>
        <EmojiMartPicker native />
      </Column>
      <Column>
        <h3>Without Native Prop</h3>
        <EmojiMartPicker />
      </Column>
    </Container>
  );
}

export default App;
