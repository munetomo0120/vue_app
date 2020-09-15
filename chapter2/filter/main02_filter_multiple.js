var app = new Vue({
  el: '#app',
  data: {
    price: 1000
  },
  filters: {
    // 金額を3桁カンマ編集するフィルター
    number_format: function(val) {
      return val.toLocaleString();
    },
    // 金額の後ろに単位をつけるフィルター
    unit: function(val) {
      return val + '円';
    }
  }
});