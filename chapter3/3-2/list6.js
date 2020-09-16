// 配列要素がオブジェクトの場合の並び替え
// 商品オブジェクトの配列
let products = [
  { ID: 1, price: 1000 },
  { ID: 2, price: 500 },
  { ID: 3, price: 2000 },
  { ID: 4, price: 30000 },
  { ID: 5, price: 50 },
]

// 安い順にソート
products.sort(function (a, b) {
  return a.price - b.price;
})

// 並び替えた結果を確認
console.log(products);