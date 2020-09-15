Vue.filter('number_format', function(val) {
  return val.toLocaleString();
});

var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    // 現在日時を返すメソッド
    now1: function() {
      return (new Date()).toLocaleString();
    }
  },
  computed: {
    // 現在日時を返す算出プロパティ
    now2: function() {
      return (new Date()).toLocaleString();
    }
  }
});