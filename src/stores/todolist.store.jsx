import { observable } from 'mobx';

class Todo {
    @observable msg

    constructor(value) {
      this.msg = value
        }
  }
class TodolistStore{

    @observable todoList=[]

    constructor(){
        this.todoList = [{msg:"first msg"},{msg:"second msg"},{msg:"third msg"}];
    }

    createTodo(value) {
        this.todoList.push(new Todo(value))
      }

    

}

export default TodolistStore;