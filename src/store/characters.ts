import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { HydrateAction } from "../../lib/hydrateAction";
import { CharactersState } from "../../lib/charactersState";
import { CharacterData } from "../../lib/characterData";
import { Characters } from "@prisma/client";

type CharactersSliceState = {
  userCharacters: CharactersState | null;
  allCharacters: CharactersState | null;
  selectedCharacter: Characters | null;
};

export const allCharactersRequest = createAsyncThunk(
  "characters/loadAllCharacters",
  async () => {
    const res = await fetch("/api/characters");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const userCharactersRequest = createAsyncThunk(
  `characters/userCharacters`,
  async (userId: number) => {
    const res = await fetch(`/api/user/${userId}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const selectCharacterRequest = createAsyncThunk(
  `characters/selectedCharacter`,
  async (charData: Characters) => {
    return charData;
  }
);

export const newCharacterRequest = createAsyncThunk(
  "characters/new",
  async (charData: CharacterData) => {
    const res = await fetch("/api/characters/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(charData),
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const deleteCharacterRequest = createAsyncThunk(
  "characters/delete",
  async (charId: number) => {
    const res = await fetch(`/api/characters/${charId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      throw new Error(
        errorData.error ||
          "ERROR: Something happened while trying to delete this character."
      );
    }
  }
);
const initialState: CharactersSliceState = {
  userCharacters: null,
  allCharacters: null,
  selectedCharacter: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    loadAllCharacters: (state, action) => {
      state.allCharacters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction) => {
      return {
        ...state,
        allCharacters: action.payload.characters.allCharacters,
      };
    });
    builder.addCase(allCharactersRequest.fulfilled, (state, action) => {
      state.allCharacters = action.payload;
    });
    builder.addCase(allCharactersRequest.rejected, (state) => {
      state.allCharacters = null;
    });
    builder.addCase(userCharactersRequest.fulfilled, (state, action) => {
      state.userCharacters = action.payload;
    });
    builder.addCase(userCharactersRequest.rejected, (state) => {
      state.userCharacters = null;
    });
    builder.addCase(newCharacterRequest.fulfilled, (state, action) => {
      state.userCharacters = {
        ...state.userCharacters,
        // [action.payload.id]: action.payload,
      };
    });
    builder.addCase(newCharacterRequest.rejected, (state) => {
      state.userCharacters = { ...state.userCharacters };
    });
    builder.addCase(selectCharacterRequest.fulfilled, (state, action) => {
      state.selectedCharacter = action.payload;
    });
    builder.addCase(selectCharacterRequest.rejected, (state, action) => {
      state.selectedCharacter = null
    })
  },
});

export const allCharactersState = (state: AppState) =>
  state.characters.allCharacters;
export const userCharactersState = (state: AppState) =>
  state.characters.userCharacters;
export const selectedCharacterState = (state: AppState) =>
  state.characters.selectedCharacter;
