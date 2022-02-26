export const mainPage: string = `
  <div>Hit and Blow ゲーム!!</div>
    <p>0から9の数字で3ケタの数字を作り、その数字を予測していくゲームです。<br/> 予測した数字が位置も数字もあっている場合は「hit」、位置は間違っているが数字は合っているという場合は「blow」と表示されます。</p>
    <div>
      <p>3つの数字を選択してね!</p>
      <div id="render" class="select-wrapper"></div>
      <br/>
      <spanp>選択した数字→</span>
      <span id="select"></span>
      <br/>
      <br/>
      <button id="reset">数字をリセット!</button>
      <button type="button" id="start-button">送信!</button>
      <div>
        <p>ログ</p>
        <div id="log"></div>
      </div>
    </div>
  </div>
`;
