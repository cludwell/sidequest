import { Users as PrismaUser } from "@prisma/client";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../lib/user";
import { makeStore } from ".";
// import { HYDRATE } from "next-redux-wrapper";

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
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("REQUEST HAS BEEN SENT ");
    if (res.ok) {
      const data = await res.json();
      // sessionSlice.actions.login(data)
      // makeStore().dispatch(sessionSlice.actions.login(data))
      return data;
    } else if (res.status < 500) {
      console.log("IF THE CODE WAS LESS THAN 500");
      const data = await res.json();
      return { errors: data.errors };
    } else {
      console.log("THERE WAS AN ERROR WITH THE RESPONSE");
      throw new Error("Server error");
    }
  }
);

// const initialState: SessionState = { user: null };

export const sessionSlice = createSlice({
  name: "session",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      state.user = user
      console.log('=============================USER', user)
      return {
        user: user
      }
    },
    logout: (state) => {
      return {
        user: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInRequest.fulfilled, (state, action) => {
      // You can update additional state here if needed.
      state.user = action.payload
    });
    builder.addCase(logInRequest.rejected, (state, action) => {
      console.error("Login failed:", action.error.message);
    });
  },
});

// Handle [HYDRATE] separately outside the createSlice
// export const hydrateReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     return {
//       ...state,
//       ...action.payload.session, // Make sure you're using the correct path to your session state
//     };
//   } else {
//     return state;
//   }
// };

// export const { login, logout } = sessionSlice.actions;
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
