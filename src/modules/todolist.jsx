import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    text:'',
    selectid:'',
    tododata: localStorage.getItem('tododata') ? JSON.parse(localStorage.getItem('tododata')) : []
}
export const todolist = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        todoadd(state, actions){
            const id = state.tododata.length+1
            state.tododata = [...state.tododata, { id, text:state.text , chk:false} ]
            localStorage.setItem('tododata',JSON.stringify(state.tododata) )
        },
        tododel(state , actions){
            state.tododata = state.tododata.filter(i=>i.id!==actions.payload)
            localStorage.setItem('tododata',JSON.stringify(state.tododata) )
        },
        todoiptext(state , actions){
            state.text=actions.payload
        },
        todoselect(state , actions){
            state.selectid=actions.payload;
            state.text=state.tododata.find(i=>i.id===actions.payload ).text
        },
        todoedit(state , actions){
            state.tododata=state.tododata.map(i=> i.id===state.selectid ? {...i,text:state.text}:i)
            state.selectid = ''
            localStorage.setItem('tododata',JSON.stringify(state.tododata) )
        },
        todotoggle(state,actions){
            state.tododata=state.tododata.map(i=> i.id===actions.payload? {...i , chk : !i.chk } : i)
            localStorage.setItem('tododata',JSON.stringify(state.tododata) )
        },
        editclose(state){
            state.selectid='';
            state.text=''
        }
    }
})
export const {todoadd,todoiptext,tododel,todoedit,todotoggle,editclose , todoselect}=todolist.actions
export default todolist.reducer