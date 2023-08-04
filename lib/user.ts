export interface User {
    id: number;
    username: string;
    email: string;
    hashedPassword: string;
    profilePic: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  }
