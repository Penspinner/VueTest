Vue.component('todo-item', 
{
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
});

var todoList = new Vue
({
    el: '#todoList',
    data: 
    {
        newTodoText: '',
        todos: []
    },
    methods: 
    {
        addNewTodo: function () 
        {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        },
        loadTodos: function() 
        {
            this.todos.push('Do the dishes');
            this.todos.push('Take out the trash');
            this.todos.push('Mow the lawn');
        }
    }
});