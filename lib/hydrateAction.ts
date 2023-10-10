import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "./user";
import { CharacterData } from "./characterData";
import { ScenariosState } from "./scenarioState";
import { Scenarios } from "@prisma/client";

interface Payload {
  payload: {
    session: {
      user: null | User;
    };
    characters: {
      userCharacters: null | CharacterData;
      allCharacters: null | CharacterData;
      selectedCharacter: null | CharacterData;
    };
    scenarios: {
      userScenarios: null | ScenariosState;
      allScenarios: null | ScenariosState;
      selectedScenario: null | Scenarios;
    };
  };
  type: typeof HYDRATE;
}

export interface HydrateAction extends PayloadAction<Payload, typeof HYDRATE> {}
