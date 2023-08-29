import Link from "next/link";

export default function Drawer() {
  return (
<div className="drawer m-2">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <h1 className="astloch text-6xl">sideQuest</h1>
      <li><Link href={`/characters`}>Create Character</Link></li>
      <li><a>Campaigns</a></li>

    </ul>
  </div>
</div>
  );
}
