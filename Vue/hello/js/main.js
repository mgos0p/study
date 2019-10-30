var app = new Vue({
  el: "#app",
  methods: {
    appItem: function (event) {
      //alert();
      if (this.newItem == "") return;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = "";
    }
  },
  data: {
    newItem: "",
    todos: []
  }
});
