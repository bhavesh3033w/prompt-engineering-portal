import { Link } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./Sidebar";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-sidebar border-b border-sidebar-border flex items-center px-4">
        <Link to="/" className="flex items-center gap-2 text-sidebar-foreground font-bold text-lg">
          <Terminal className="w-5 h-5 text-sidebar-primary" />
          <span>PromptEng<span className="text-sidebar-primary">.guide</span></span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-sidebar-muted hover:text-sidebar-foreground text-sm transition-colors"
          >
            GitHub
          </a>
          <button
            className="md:hidden p-2 text-sidebar-muted hover:text-sidebar-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-sidebar pt-14 md:hidden">
          <nav className="p-4 space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded text-sm transition-colors
                  ${isActive
                    ? "bg-sidebar-accent text-sidebar-primary font-semibold"
                    : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default TopNav;
