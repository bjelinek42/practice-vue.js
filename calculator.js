/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello Vue!"
    };
  }
};

Vue.createApp(App).mount('#app');