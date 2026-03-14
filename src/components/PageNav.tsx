import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavProps {
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

const PageNav = ({ prev, next }: PageNavProps) => (
  <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
    {prev ? (
      <Link to={prev.path} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        <div>
          <div className="text-xs text-muted-foreground">Previous</div>
          <div className="font-medium text-foreground group-hover:text-primary">{prev.label}</div>
        </div>
      </Link>
    ) : <div />}
    {next ? (
      <Link to={next.path} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group text-right">
        <div>
          <div className="text-xs text-muted-foreground">Next</div>
          <div className="font-medium text-foreground group-hover:text-primary">{next.label}</div>
        </div>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    ) : <div />}
  </div>
);

export default PageNav;
