import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../utils/helpers";
import { faker } from "@faker-js/faker";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  loaded: false,
  isLoggedIn: false,
  error: false,
  errorMessage: "",
  adminUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.loaded = true;
      state.error = false;
      state.errorMessage = "";
      state.adminUser = payload.data.user;
      state.isLoggedIn = true;
    });
    builder.addCase(adminLogin.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });
    builder.addCase(adminLogout.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(adminLogout.fulfilled, (state, action) => {
      state = initialState;
      localStorage.clear();
    });
    builder.addCase(adminLogout.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });
  },
});

export const { setLogin, setErrorLogin } = authSlice.actions;

export default authSlice.reducer;

export const adminLogin = createAsyncThunk("auth/login", async ({ email }) => {
  if (!email) return;

  const id = faker.datatype.uuid();
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const avatar = faker.image.avatar();

  await delay(3000);
  return { data: { status: "success", user: { id, email, first_name, last_name, avatar } } };
});

export const adminLogout = createAsyncThunk("auth/logout", async ({ routeTo }) => {
  await delay(3000);
  routeTo();
  return { status: "success" };
});
