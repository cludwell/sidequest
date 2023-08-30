import { Characters } from "@prisma/client";

export type CharactersState = {
    [key: string]: Characters;
  };
