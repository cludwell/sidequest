
import { DefaultSession } from "next-auth";

type CustomSessionUser ={
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    id?: number | null | undefined;

}
export interface CustomSession extends DefaultSession {
   user?: CustomSessionUser
}
