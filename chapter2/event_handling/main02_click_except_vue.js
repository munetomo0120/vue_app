// 頻繁にアクセスする要素を事前に取得する
var app = document.querySelector('#app');
var btn = app.querySelector('.btn');
var num = app.querySelector('.num');

// 在庫数の初期値
var stock = 10;

// ボタンにイベントハンドラを割り当てる
function onDeleteItem() {
  stock--;  // 在庫数を減らす
  updateStock();  // 表示を更新する
}

// 在庫数の表示を更新するメソッド
function updateStock() {
  if (stock >= 1) {
    num.textContent = '残り' + stock + '個';
  } else {
    app.removeChild(btn);  // ボタンを削除する
    num.textContent = '在庫切れ';
  }
}

// 在庫数の初期値を表示する
updateStock();