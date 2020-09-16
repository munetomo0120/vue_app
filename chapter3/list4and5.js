// 数値の大小関係を比較するだけのシンプルな記述

// 金額の配列を作成
let array_price = [1000,1100,300,500,4000];

// 並び替え
array_price.sort(function(a, b) {
  return a - b;
})

// 並び替えた結果を確認する
console.log(array_price);