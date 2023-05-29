
import { createSlice } from "@reduxjs/toolkit";
// import Faviorites from "../UI/Faviorites";

const favSlice = createSlice({
    name:"Faviorites",
    initialState:[],
     
  
    reducers:{

      addMovies: (state,action) => {
      //  state.push(action.payload)
      const key = state.find((fav) =>  fav.imdbID === action.payload.imdbID)
      if(!key){
        state.push(action.payload)
      }else{
        alert("already added")
      }
      
            
        },

        removeMovies :(state,action) => {
         return state.filter((fav) =>  fav.imdbID !== action.payload.imdbID)
        
        },

    },
        
    

})
export const  favmovies = favSlice.reducer;
export const {addMovies , removeMovies} = favSlice.actions