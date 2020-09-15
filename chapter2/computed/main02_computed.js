Vue.filter('number_format', function(val) {
  return val.toLocaleString();
});

var app = new Vue({
  el: '#app',
  data: {
    year: (new Date()).getFullYear()
  },
  computed: {
    // 今年がうるう年かどうかを判定する算出プロパティ
    // 4で割り切れて100で割り切れない、または400で割り切れる場合
    isUrudoshi: function() {
      if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
        // うるう年
        return true;
      } else {
        // うるう年ではない
        return false;
      }
    }
  }
});