import React, { useState } from "react";
import ColorfulMessage from "./components/ColofulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaseShowFlag] = useState(false);
  const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faceShowFlag);
  };
  //再描画が沢山入るのでエラーとされる。
  //このままだと再レンダリングでそれぞれ動作するため、
  //on/offのボタン機能が働かない。
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setFaseShowFlag(true);
    } else {
      faceShowFlag && setFaseShowFlag(false);
    }
  }
  return (
    // 1つのタグで囲む必要がある。
    // <></>でも同じ意味になる
    //　＜ColorfulMessage color="blue" message="お元気ですか？" />
    // <p style={contentLadyStyle}>お元気！</p>
    //<button onClick={onClickButton}>ボタン</button>

    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気ですね。</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( *´艸｀)</p>}
    </React.Fragment>
  );
};

export default App;
