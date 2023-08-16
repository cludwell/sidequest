import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "./user";

export interface HydrateAction extends PayloadAction {
    payload: {
      session: {
        user: null | User; // Adjust this type as needed
      };
      characters: {
        userCharacters: null;
        allCharacters: null;
      };
    };
    type: typeof HYDRATE;
  }
