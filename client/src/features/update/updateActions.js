//use axios to make put request to update user's profile in the database and dispatch the action to update the state

// Path: client\src\features\update\updateActions.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3001/api/v1";

export const updateUserProfile = createAsyncThunk(
  "update/updateUserProfile",
  async ({ firstName, lastName }, { rejectWithValue, getState }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // get user's token from local storage
      const {
        auth: { userToken },
      } = getState();

      // set token in header
      if (userToken) {
        config.headers["Authorization"] = `Bearer ${userToken}`;
      }

      const { data } = await axios.put(
        `${url}/user/profile`,
        { firstName, lastName },
        config
      );

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
