/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello Vue!",
      sum: 0,
      num1: 0,
      num2: 0,
      num3: 0
    };
  },
  methods: {
    sumNumbers: function() {
      this.sum = this.num1 + this.num2 + this.num3;
    }
  }
};

Vue.createApp(App).mount('#app');