var app = new Vue({
  el: '#app',
  data: {
    message: '',
    stock: 10
  },
  methods: {
    // 削除ボタンのクリックイベントハンドラ
    onDeleteItem: function() {
      this.stock--;
    }
  },
  watch: {
    // 在庫数が変化したとき呼び出されるバンドラ
    stock: function(newStock, oldStock) {
      if (newStock === 0) {
        this.message = '売り切れ';
      }
    }
  }
});