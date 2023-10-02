import { Session } from 'next-auth';
import { User } from 'next-auth';

export interface CustomSession extends Session {
  user: CustomUser;
}

export interface CustomUser extends User {
  id: string;
  profilePic: string;
}

// Then you can use CustomSession and CustomUser as types where needed.
