/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Peter",
      city: "colorado springs",
      instrument: "guitar",
      fruits: ["apple", "banana", "raspberry"],
      newFruit: "",
      showInfo: false
    };
  },
  methods: {
    doThis: function() {
      console.log("this is text");
    },
    changeName: function() {
      console.log('changing the name');
      this.name = "Jessica";
    },
    addFruit: function() {
      console.log("hello");
      this.fruits.push(this.newFruit);
    },
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
    }
  }
};

Vue.createApp(App).mount('#app');