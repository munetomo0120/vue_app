let btnLoad = document.querySelector('#load');
// 読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', function(event) {
  // ここにJSONを読み込む処理を記述する
  // ①XMLHttpRequestオブジェクトのインスタンスを生成
  let xmlHttpRequest = new XMLHttpRequest();
  // ②通信状態の変化を監視するイベントハンドラを設定
  xmlHttpRequest.onreadystatechange = function() {
    // レスポンスの受信が正常に完了したとき
    if (this.readyState === 4 && this.status === 200) {
      // 受信したデータをコンソールに出力する
      console.log(this.readyState, this.response);
    }
  };
  // ③レスポンスの形式を指定する
  xmlHttpRequest.responseType = 'json';
  // ④リクエストメソッドと読み込むファイルのパスを指定する
  xmlHttpRequest.open('GET', 'products.json');
  // ⑤リクエストを送信する（非同期通信を開始する）
  xmlHttpRequest.send();
});