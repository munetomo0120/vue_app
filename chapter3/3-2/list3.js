// sort()関数の使用例（関数定義を分離）

// 金額の配列を作成
let array_price = [1000,1100,300,500,4000];

// 値が小さい順に並べる比較関数を定義
function desc_order(a, b) {
  if (a < b) {
    return -1; // aを持つ要素はbを持つ要素より手前
  }
  if (a === b) {
    return 1; // aを持つ要素はbを持つ要素よりも後ろ
  }
  return 0; // 順番は同じ
}

// 安い順にソートする
array_price.sort(desc_order);

// 並び替えた結果を確認する
console.log(array_price);