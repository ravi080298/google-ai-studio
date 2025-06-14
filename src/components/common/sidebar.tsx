import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Settings, LayoutDashboard } from "lucide-react"; // Or any icon lib

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/", icon: <LayoutDashboard size={20} /> },
    { label: "Projects", path: "/projects", icon: <Menu size={20} /> },
    { label: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`h-screen bg-[#181818] transition-all duration-200 ${
        collapsed ? "w-16" : "w-56"
      } flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-100">
        <span
          className={`text-xl text-white font-semibold ${
            collapsed ? "hidden" : "block"
          }`}
        >
          AI Studio
        </span>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-black transition"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="mt-4 space-y-1">
          {menuItems.map(({ label, path, icon }) => {
            const isActive = location.pathname === path;
            return (
              <div key={label}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-2 transition rounded-md 
                    ${
                      isActive
                        ? "bg-gray-100 text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                    ${collapsed ? "justify-center" : ""}
                  `}
                >
                  {icon}
                  {!collapsed && (
                    <span className="text-sm font-medium">{label}</span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
