import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  tableOfContents?: { id: string; label: string }[];
}

const PageLayout = ({ title, subtitle, children, tableOfContents }: PageLayoutProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    className="flex gap-8 max-w-6xl mx-auto"
  >
    <article className="flex-1 min-w-0 max-w-3xl prose-content">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>}
      {children}
    </article>

    {tableOfContents && tableOfContents.length > 0 && (
      <aside className="hidden lg:block w-52 shrink-0">
        <div className="sticky top-20">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">On this page</h4>
          <nav className="space-y-1">
            {tableOfContents.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    )}
  </motion.div>
);

export default PageLayout;
