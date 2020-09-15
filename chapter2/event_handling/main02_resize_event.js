var app = new Vue({
  el: '#app',
  data: {
    // ウィンドウサイズ
    width: window.innerWidth,
    height: window.innerHeight
  },
  created: function() {
    // イベントハンドラを登録
    addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy: function() {
    // イベントハンドラを解除
    removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    // イベントハンドラ
    resizeHandler: function($event) {
      // 現在のウィンドウサイズでプロパティを更新
      this.width = $event.target.innerWidth;
      this.height = $event.target.innerHeight;
    }
  }

});