import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </>
  );
}
