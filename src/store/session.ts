import { Users as PrismaUser } from "@prisma/client";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../lib/user";
// constants
const SET_USER: string = "session/SET_USER";
const REMOVE_USER: string = "session/REMOVE_USER";

// Define action interfaces
export interface SetUserAction {
  type: typeof SET_USER;
  payload: PrismaUser;
}

export interface RemoveUserAction {
  type: typeof REMOVE_USER;
}

// Define the shape of the session state managed by the session reducer
export interface SessionState {
  user: User | null;
  // Add other properties if needed
}
interface SignInCredentials {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "session/signIn",
  async ({ email, password }: SignInCredentials) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else if (res.status < 500) {
      const data = await res.json();
      return { errors: data.errors };
    } else {
      throw new Error("Server error");
    }
  }
);

export const logInRequest = createAsyncThunk(
  "session/login",
  async ({ email, password }: SignInCredentials) => {
    const res = await fetch("api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else if (res.status < 500) {
      const data = await res.json();
      return { errors: data.errors };
    } else {
      throw new Error("Server error");
    }
  }
);

const initialState: SessionState = { user: null };

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      // console.log("INITIAL STATE", initialState);
      // const user = action.payload;
      // console.log("HERE IS THE STATE", state);
      return {
          user: action.payload
       }
    },
    logout: (state) => {
      return {
        user: null
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.error("Sign-in failed:", action.error.message);
    });
  },
});

export const { login, logout } = sessionSlice.actions;
// Union type for all possible actions
export type SessionActionTypes = SetUserAction | RemoveUserAction;

// export const setUser = (user: PrismaUser): SetUserAction => ({
//   type: SET_USER,
//   payload: user,
// });

// export const removeUser = (): RemoveUserAction => ({
//   type: REMOVE_USER,
// });

// export const authenticate = () => async (dispatch: Function) => {
//   const response = await fetch("/api/auth/", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     const data = await response.json();
//     if (data.errors) {
//       return;
//     }

//     dispatch(setUser(data));
//   }
// };

// export const login =
//   (credential: string, password: string) => async (dispatch: Function) => {
//     const response = await fetch("/api/auth/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         credential,
//         password,
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       dispatch(setUser(data));
//       return null;
//     } else if (response.status < 500) {
//       const data = await response.json();
//       if (data.errors) {
//         return data.errors;
//       }
//     } else {
//       return ["An error occurred. Please try again."];
//     }
//   };

// export const logout = () => async (dispatch: Function) => {
//   const response = await fetch("/api/auth/logout", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     dispatch(removeUser());
//   }
// };

// export const signUp =
//   (username: string, email: string, password: string) =>
//   async (dispatch: Function) => {
//     const response = await fetch("/api/auth/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         password,
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       dispatch(setUser(data));
//       return null;
//     } else if (response.status < 500) {
//       const data = await response.json();
//       if (data.errors) {
//         return data.errors;
//       }
//     } else {
//       return ["An error occurred. Please try again."];
//     }
//   };

// export default function reducer(
//   state = initialState,
//   action: SessionActionTypes
// ) {
//   switch (action.type) {
//     case SET_USER:
//       return { user: (action as SetUserAction).payload };
//     case REMOVE_USER:
//       return { user: null };
//     default:
//       return state;
//   }
// }
