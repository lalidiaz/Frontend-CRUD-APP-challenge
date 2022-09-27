import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usersFakeAPI } from "../lib/fakeApi";
import { faker } from "@faker-js/faker";
import { delay } from "../utils/helpers";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  loaded: false,
  error: null,
  errorMessage: null,
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loaded = true;
      state.isLoading = false;
      state.error = false;
      state.errorMessage = null;
      state.data = payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });

    builder.addCase(fetchUserById.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
      state.errorMessage = null;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loaded = true;
      state.isLoading = false;
      state.error = false;
      state.errorMessage = null;
    });
    builder.addCase(fetchUserById.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
      state.errorMessage = payload;
    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.loaded = true;
      state.isLoading = false;
      state.error = false;
      state.errorMessage = null;

      const findUser = state.data.find((user) => user.id === payload.data.user.id);
      const { first_name, last_name, email } = payload.data.user;

      if (findUser && first_name) {
        findUser.first_name = first_name;
      }
      if (findUser && last_name) {
        findUser.lastName = last_name;
      }

      if (findUser && email) {
        findUser.email = email;
      }
    });
    builder.addCase(updateUser.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });

    builder.addCase(createUser.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.loaded = true;
      state.isLoading = false;
      state.error = false;
      state.errorMessage = null;

      const { first_name, last_name, email } = payload.data.newUser;
      const id = faker.datatype.uuid();
      const avatar = faker.image.avatar();

      const newUser = { id, first_name, last_name, email, avatar };
      state.data.unshift(newUser);
      state.total = state.data.length;
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.loaded = false;
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.loaded = true;
      state.isLoading = false;
      state.error = false;
      state.errorMessage = null;

      const index = state.data.map((user) => user.id).indexOf(payload.data.id);
      state.data.splice(index, 1);
      state.total = state.data.length;
    });
    builder.addCase(deleteUser.rejected, (state, { payload }) => {
      state.loaded = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = payload;
    });
  },
});

export const { setUsersRequest, setUsersSuccess, setUsersError, setUser } = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await usersFakeAPI;
  await delay(3000);
  return JSON.parse(response);
});

export const fetchUserById = createAsyncThunk("users/fetchUserById", async ({ id, routeTo }) => {
  if (!id) return;
  await delay(3000);
  routeTo(`/users/${id}`);
  return id;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, first_name, last_name, email, routeTo }) => {
    await delay(3000);
    const user = { id, first_name, last_name, email };
    toast.success("Success", { position: "top-center", autoClose: 5000 });
    routeTo("/users");
    return { data: { user, status: "success" } };
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async ({ id, first_name, last_name, email }) => {
    if (!first_name && !last_name && !email) return;
    await delay(3000);

    const newUser = { id, first_name, last_name, email };

    toast.success("Created successfully", { position: "top-center", autoClose: 5000 });

    return { data: { newUser, status: "success" } };
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async ({ id }) => {
  if (!id) return;

  await delay(3000);
  toast.success("Success", { position: "top-center", autoClose: 5000 });

  return { data: { id, status: "success" } };
});
