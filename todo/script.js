var todoList={
  todos:[],
  
  displayTodos:function(){
    if(this.todos.length===0){
      console.log('Your todo List is empty!');
    }
    else{
    console.log('My todos :');
    for(var i=0;i<this.todos.length;i++){
      if(this.todos[i].completed===true){
        console.log('(X)',this.todos[i].todoText);
      }else{
        console.log('( )',this.todos[i].todoText);
      }
    }
    }
  },
  
  addTodo: function(todoText){
     
    this.todos.push({
      todoText:todoText,
      completed:false
    });
    this.displayTodos();
  },
  
  changeTodo: function(location,todoText){
    this.todos[location].todoText=todoText;
    this.displayTodos();
  },
  
  deleteTodo: function(position){
      this.todos.splice(position,1);
      this.displayTodos();
  },
  
  toggleComplete:function(position){
    var todo=this.todos[position];
    todo.completed=!todo.completed;
     this.displayTodos();
  },
  
  toggleAll:function(){
    var totalTodos=this.todos.length;
    var completedTodos=0;
    for(var i=0;i<totalTodos;i++){
      if(this.todos[i].completed===true){
        completedTodos++;
      }
    }
    if(completedTodos===totalTodos){
      for(var i=0;i<totalTodos;i++){
        this.todos[i].completed=false;
      }
    }
    else{
       for(var i=0;i<totalTodos;i++){
        this.todos[i].completed=true;
      }
    }
    
    this.displayTodos();
  }
};


var handler={
  displayTodos:function(){
    todoList.displayTodos();
  },
  toggleAll:function(){
    todoList.toggleAll();
  },
  addTodo:function(){
    var toDoTextInput=document.getElementById('toDoTextInput');
    todoList.addTodo(toDoTextInput.value);
    toDoTextInput.value='';
  },
  changeTodo:function(){
    var changeToDoPositionInput=document.getElementById('changeToDoPositionInput');
    var changeToDoTextInput=document.getElementById('changeToDoTextInput');
    todoList.changeTodo(changeToDoPositionInput.valueAsNumber,changeToDoTextInput.value);
    changeToDoPositionInput.value='';
    changeToDoTextInput.value='';
  },
  deleteTodo:function(){
    var deleteTodoPositionInput=document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value='';
  },
  toggleComplete:function(){
    var toggleCompleteTodoPositionInput=document.getElementById('toggleCompleteTodoPositionInput');
    todoList.toggleComplete(toggleCompleteTodoPositionInput.valueAsNumber);
    toggleCompleteTodoPositionInput.value='';
  }
  
};

var view={
  displayTodos:function(){
    var todosUl=document.querySelector('ul');
    todosUl.innerHTML='';
    for(var i=0;i<todoList.todos.length;i++){      
      var todoLi=document.createElement('li');
      var todo=todoList.todos[i];
      var todoTextWithCompletion='';
      
      if(todo.completed===true){
        todoTextWithCompletion='(X) '+todo.todoText;
      }
      else{
        todoTextWithCompletion='( ) '+todo.todoText;
      }
      
      todoLi.textContent=todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
  
};
