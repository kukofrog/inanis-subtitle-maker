import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 400px;

  textarea {
    margin-top: 20px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    resize: none;
    padding: 16px;
    color: white;

    :focus {
      border: 1px solid rgba(255, 255, 255, 0.6);
      outline: none;
    }
  }

  h2 {
    white-space: pre-line;
  }
`;

const Goddess = styled.img`
  width: 160px;
  height: 160px;
`;

const Title = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-top: 16px;
`;

const GoButton = styled.button`
  margin-top: 20px;
  padding: 12px 40px;
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

function Maker() {
  const [text, setText] = useState('');

  function makeSubtitle() {
    const textArray = text.split(/(\d{1,2}h\d{1,2}m\d{1,2}s|\d{1,2}m\d{1,2}s|\d{1,2}s)\n?/g);
    let tempText = '';

    textArray.map((text, idx) => {
      if (text === '') return;

      if (idx % 2 == 0) {
        tempText += (parseInt((idx / 2).toFixed()) + 1).toString() + '\n';
        let timeArray = textArray[idx + 1].replace('h', ':').replace('m', ':').replace('s', '').split(':');
        tempText += timeArray.join(':') + ',300' + ' --> ';
        timeArray.push((parseInt(timeArray.pop()!) + 5).toString());
        tempText += timeArray.join(':') + ',300' + '\n';
      } else {
        tempText += textArray[idx - 1] + '\n\n';
      }
    });

    var a = document.createElement('a');
    const blob = new Blob([tempText], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'inanis.srt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <Container>
      <Goddess src="https://i.imgur.com/DQaWmTF.jpg" />
      <Title>Put It!</Title>
      <textarea rows={4} value={text} onChange={e => setText(e.target.value)} />
      <GoButton onClick={makeSubtitle}>{"LET'S GO!!!!"}</GoButton>
    </Container>
  );
}

export default Maker;
