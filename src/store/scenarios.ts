import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";

export const loadScenarios = createAsyncThunk(
  "scenarios/loadScenarios",
  async () => {
    const res = await fetch("/api/scenarios");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const scenarioSlice = createSlice({
  name: "scenarios",
  initialState: { scenarios: null },
  reducers: {
    loadScenarios: (state, action) => {
      state.scenarios = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        scenarios: action.payload.scenarios.loadScenariosRequest,
      };
    });
    builder.addCase(loadScenarios.fulfilled, (state, action) => {
      state.scenarios = action.payload;
    });
    builder.addCase(loadScenarios.rejected, (state, action) => {
      state.scenarios = null;
    });
  },
});

export const scenarioState = (state: AppState) => state.scenarios
