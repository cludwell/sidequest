import { ReactNode } from "react";
export interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
}
