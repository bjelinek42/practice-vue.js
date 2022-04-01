/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Peter",
      city: "colorado springs",
      instrument: "guitar"
    };
  },
  methods: {
    doThis: function() {
      console.log("this is text");
    },
    changeName: function() {
      console.log('changing the name');
      this.name = "Jessica";
    }
  }
};

Vue.createApp(App).mount('#app');