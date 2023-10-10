import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { ScenariosState } from "../../lib/scenarioState";
import { Scenarios } from "@prisma/client";

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

export const selectedScenarioRequest = createAsyncThunk(
  `scenarios/selectedScenario`,
  async (sceneData: Scenarios) => {
    return sceneData;
  }
);

type ScenariosSliceState = {
  userScenarios: ScenariosState | null;
  allScenarios: ScenariosState | null;
  selectedScenario: Scenarios | null;
};

const initialState: ScenariosSliceState = {
  userScenarios: null,
  allScenarios: null,
  selectedScenario: null,
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
    builder.addCase(selectedScenarioRequest.fulfilled, (state, action) => {
      state.selectedScenario = action.payload
    });
    builder.addCase(selectedScenarioRequest.rejected, (state, action) => {
      state.selectedScenario = null
    })
  },
});

export const allScenarioState = (state: AppState) =>
  state.scenarios.allScenarios;
export const userScenarioState = (state: AppState) =>
  state.scenarios.userScenarios;
export const selectedScenarioState = (state: AppState) =>
  state.scenarios.selectedScenario;
