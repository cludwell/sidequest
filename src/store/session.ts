import { Users as PrismaUser } from "@prisma/client";
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export interface User {
  id: number;
  username: string;
  email: string;
  hashedPassword: string;
  profilePic: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}
// Define the shape of the session state managed by the session reducer
export interface SessionState {
  user: User | null;
  // Add other properties if needed
}
interface SignInCredentials {
  username: string;
  email: string;
  password: string;
}


const initialState: SessionState = { user: null };

export const signIn = createAsyncThunk(
  "session/signIn",
  async ({ username, email, password }: SignInCredentials) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      return { errors: data.errors };
    } else {
      throw new Error("Server error");
    }
  }
);

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login(state, action: PayloadAction<PrismaUser>) {
      console.log('ARE WE ENTERING THE REDUCER?', action.payload)
      const user = action.payload
      state.user = {
        ...user,
        createdAt: user.createdAt?.toISOString() || null, // Convert to ISO string
        updatedAt: user.updatedAt?.toISOString() || null  // Convert to ISO string
      };
    },
    logout(state) {
      state.user = null;
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

export const { login, logout } = sessionSlice.actions
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
