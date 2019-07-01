import React from 'react';
import { observer, inject } from 'mobx-react';

const TodoBody = inject('styleStore', 'todoListStore')(observer( ( {styleStore, todoListStore})=> <div style={{padding:'15px', backgroundColor:'#eeeeee'}}>
    <div>
    <span style={{width:"15%", display:"inline-block"}} >Enter Todo's here:</span>
    <input type="text" onKeyPress={this.props.createNew(this)} />
    </div><br></br>

    {todoListStore.todoList.map((entry,i)=><li key={i} style={styleStore.applicationBarStyle}>{entry.msg}</li>)}
    </div>
))

export default TodoBody