import React from 'react';
import { observer, inject } from 'mobx-react';

// function (createNew(e)=> {
//     if (e.which === 13) {
//       this.props.todoListStore.createTodo(e.target.value)
//     // this.todoList.push(new Todo(e.target.value))
//       e.target.value = ""
//     }
//   }), 

@inject('styleStore', 'todoListStore')
@observer
class TodoBody extends React.Component{

    
    createNew(e){
        if (e.which === 13) {
          this.props.todoListStore.createTodo(e.target.value);
        // this.todoList.push(new Todo(e.target.value))
          e.target.value = ""
        }
      }

    render(){
        return (
            <div style={{padding:'15px', backgroundColor:'#eeeeee'}}>
                    <div>
                    <span style={{width:"15%", display:"inline-block"}} >Enter Todo's here:</span>
                    <input type="text" onKeyPress={this.createNew.bind(this)} />
                    </div><br></br>

                    {this.props.todoListStore.todoList.map(
                        (entry,i)=>
                            <li key={i} style={this.props.styleStore.applicationBarStyle}>{entry.msg}</li>
                        )}
                </div>
        )
    }


}

// const TodoBody = 
//     inject('styleStore', 'todoListStore')(
//         observer(
//             ({})=> 
//                 <div style={{padding:'15px', backgroundColor:'#eeeeee'}}>
//                     <div>
//                     <span style={{width:"15%", display:"inline-block"}} >Enter Todo's here:</span>
//                     <input type="text" onKeyPress={this.createNew(this)} />
//                     </div><br></br>

//                     {todoListStore.todoList.map(
//                         (entry,i)=>
//                             <li key={i} style={styleStore.applicationBarStyle}>{entry.msg}</li>
//                         )}
//                 </div>
// )
// )

export default TodoBody