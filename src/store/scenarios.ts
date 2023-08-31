import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { ScenariosState } from "../../lib/scenarioState";

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

type ScenariosSliceState = {
  userScenarios: ScenariosState | null;
  allScenarios: ScenariosState | null;
};

const initialState: ScenariosSliceState = {
  userScenarios: null,
  allScenarios: null
};
export const scenarioSlice = createSlice({
  name: "scenarios",
  initialState: initialState,
  reducers: {
    loadScenarios: (state, action) => {
      state.allScenarios = action.payload;
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
      state.allScenarios = action.payload;
    });
    builder.addCase(loadScenarios.rejected, (state, action) => {
      state.allScenarios = null;
    });
  },
});

export const scenarioState = (state: AppState) => state.scenarios
