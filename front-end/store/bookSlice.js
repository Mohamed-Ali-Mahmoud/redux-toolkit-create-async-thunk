import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// fetch books from the backend

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
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
