import React from "react";
import styled from "styled-components";
import { Picker as EmojiMartPicker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import "./App.css";

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1fr;
  padding: 1em;
`;

function App() {
  return (
    <Container>
      <Column>
        <h3>
          With the <code>native</code> prop
        </h3>
        <EmojiMartPicker native />
      </Column>
      <Column>
        <h3>
          Without the <code>native</code> prop
        </h3>
        <EmojiMartPicker />
      </Column>

      <Column>
        <h3>
          <code>useButton</code> with <code>native</code> prop
        </h3>
        <EmojiMartPicker native useButton={false} />
      </Column>
        <Column>
            <h3>
                <code>useButton</code> without <code>native</code> prop
            </h3>
            <EmojiMartPicker useButton={false} />
        </Column>
    </Container>
  );
}

export default App;
