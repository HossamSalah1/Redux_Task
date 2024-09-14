import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/language"
import counterReducer from "./slices/counter"
import userNameReducer from "./slices/userName"

const store =configureStore({

  reducer:{
    language: languageReducer,
    counter: counterReducer,
    userName:userNameReducer
  }
  //language :{language:en}
  //counter:{counter:0}
})
export default store
