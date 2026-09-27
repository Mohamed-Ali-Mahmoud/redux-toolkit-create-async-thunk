import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// side note:
// createAsyncThunk is a function that allaws you to create an async action.
// it generates three action types: pending, fulfilled, and rejected.
// pending: it call tha server and no data is returned yet.
// fullfilled: the server has returned the data successfully.
// rejected: the server has returned an error.
// it takes two arguments:
// 1. the action type (string) => "book/getBooks".
// 2. a callback function that returns a promise (async function) => async (args, thunkApi) => {}.
// the args is the argument that you pass the data to server like bookData when you insert a book.
// the thunkApi is an object that contains the dispatch, getState, and rejectWithValue functions.

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkApi) => {
    // rejectWithValue is a function that allows you to return a custom error message when the server returns an error.
    const { rejectWithValue } = thunkApi;
    try {
      // fetch the data from the server and return it.
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      // if the server returns an error, return the error message using rejectWithValue.
      return rejectWithValue(error.message);
    }
  }
);

// insert book

export const insertBooks = createAsyncThunk(
  "book/insertBooks",
  async (bookData, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;

    // get the user name from the auth state and add it to the bookData.
    // (bookData.userName) Add User Name to the bookDate (inset user name to the books).
    // (getState().auth.name)  get the user name from the auth state (getState().auth.name) = Mohamed Ali
    bookData.userName = getState().auth.name; // UserName = Mohamed Ali
    try {
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete book
export const deleteBooks = createAsyncThunk(
  "book/deleteBooks",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`http://localhost:3005/books${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create a slice for books
const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get books
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // insert books
    builder.addCase(insertBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(insertBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    });

    builder.addCase(insertBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // delete books
    builder.addCase(deleteBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(deleteBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload);
    });

    builder.addCase(deleteBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
