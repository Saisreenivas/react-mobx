import { observable } from 'mobx';

class TodolistStore{

    @observable todoList

    constructor(){
        this.todoList = [{msg:"first msg"},{msg:"second msg"},{msg:"third msg"}];
    }

    

}

export default new TodolistStore;