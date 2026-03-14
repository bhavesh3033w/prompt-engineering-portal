import { NavLink, useLocation } from "react-router-dom";
import { BookOpen, Home, Lightbulb, Code, LayoutList, Sparkles, Shield, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/introduction", label: "Introduction", icon: BookOpen },
  { path: "/concepts", label: "Basic Concepts", icon: Lightbulb },
  { path: "/techniques", label: "Techniques", icon: Code },
  { path: "/examples", label: "Good vs Bad Prompts", icon: LayoutList },
  { path: "/llm-prompting", label: "Prompting for LLMs", icon: Sparkles },
  { path: "/best-practices", label: "Best Practices", icon: Shield },
  { path: "/resources", label: "Resources", icon: ExternalLink },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      <aside
        className={`fixed top-14 left-0 bottom-0 z-40 bg-sidebar transition-all duration-200 flex flex-col
          ${collapsed ? "w-14" : "w-60"}
          hidden md:flex`}
      >
        <div className="flex items-center justify-end p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 pb-4 space-y-0.5">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <NavLink
                key={path}
                to={path}
                className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors
                  ${isActive
                    ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                    : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }
                  ${collapsed ? "justify-center" : ""}`}
                title={collapsed ? label : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export { navItems };
export default Sidebar;
