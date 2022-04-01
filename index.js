/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      name: "Brian",
      city: "san francisco",
      instrument: "",
      fruits: ["apple", "banana", "raspberry"],
      newFruit: ""
    };
  },
  methods: {
    doThis: function() {
      console.log('doing a thing...');
    },
    changeName: function() {
      console.log('changing the name');
      this.name = "Jessica";
    },
    addFruit: function() {
      console.log('adding fruit');
      console.log(this.newFruit);
      console.log(this.fruits);
      this.fruits.push(this.newFruit);
    }
  }
};

Vue.createApp(App).mount('#app');