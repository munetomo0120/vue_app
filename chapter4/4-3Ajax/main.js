// 読み込みイベントのクリックイベントハンドラを定義
$('#load').on('click', clickHandler);
function clickHandler(event) {
  // ここにJSONを読み込む処理を記述する
  // 非同期通信でJSONを読み込む
  $.ajax({
    url: 'products.json', // 通信先URL
    type: 'GET',          // 使用するHTTPメソッド（デフォルトはGETなので省略可能）
    dataType: 'json'      // レスポンスのデータタイプ
  })
  .done(function(data, textStatus, jqXHR) {
    // ここに通信成功時の処理を記述する
    console.log('通信が成功しました');
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // ここに通信失敗時の処理を記述する
    console.log('通信が失敗しました');
  });
}