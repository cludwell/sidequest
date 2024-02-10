import IconCharacters from "./icons/IconCharacters";
import Sidebar, { SidebarItem } from "./Sidebar";

export default function UserSidebar() {
  return (
    <Sidebar>
      <SidebarItem
        icon={<IconCharacters />}
        text="Characters"
        active={false}
        alert={true}
      />
      <SidebarItem
        icon={<IconCharacters />}
        text="Characters"
        active={false}
        alert={true}
      />
      <SidebarItem
        icon={<IconCharacters />}
        text="Characters"
        active={false}
        alert={true}
      />
    </Sidebar>
  );
}
