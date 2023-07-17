import {configureStore} from '@reduxjs/toolkit'

import todolist from './todolist'

export const store = configureStore({
    reducer:{
        todolist
    }
})