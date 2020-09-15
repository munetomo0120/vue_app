var app = new Vue({
  el: '#app',
  data: {
    // 初期値は当年
    year: (new Date()).getFullYear()
  },
  methods: {
    // 年のイベントハンドラ
    yearInputHandler: function($event) {
      // 直接データを更新する
      this.year = $event.target.value;
    }
  }
});