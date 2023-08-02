import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action 
export const fetchtodo = createAsyncThunk("fetchtodo", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const fetchedtodos = response.json()
    return fetchedtodos
})
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError:false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchtodo.fulfilled, (state, action) => {
            state.isLoading = false;
            console.log(action);
            state.data = action.payload;
        });
        builder.addCase(fetchtodo.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchtodo.rejected, (state,action)=>{
            console.log("Error", action.payload);
            state.isError=true;
        })
    }
})
export default todoSlice.reducer

//Incase you give thunk async function an argument and pass it during calling dispatch in main component
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Assuming you have Axios for API requests
// userSlice.js

// Async thunk to fetch user data from the API
// export const fetchUserData = createAsyncThunk('user/fetchUserData', async (userId) => {
//   try {
//     const response = await axios.get(`https://api.example.com/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchUserData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;

// Async thunk to fetch user data from the API
// export const fetchUserData = createAsyncThunk('user/fetchUserData', async (userId) => {
//   try {
//     const response = await axios.get(`https://api.example.com/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchUserData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;
