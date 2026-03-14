import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Code, LayoutList, Sparkles, Shield, ExternalLink, ArrowRight } from "lucide-react";

const modules = [
  { path: "/introduction", title: "Introduction", desc: "What is prompt engineering and why it matters", icon: BookOpen, num: "01" },
  { path: "/concepts", title: "Basic Concepts", desc: "Core building blocks of effective prompts", icon: Lightbulb, num: "02" },
  { path: "/techniques", title: "Techniques", desc: "Advanced methods like chain-of-thought and few-shot", icon: Code, num: "03" },
  { path: "/examples", title: "Good vs Bad Prompts", desc: "Side-by-side comparisons that teach by contrast", icon: LayoutList, num: "04" },
  { path: "/llm-prompting", title: "Prompting for LLMs", desc: "Platform-specific tips for ChatGPT, Claude & more", icon: Sparkles, num: "05" },
  { path: "/best-practices", title: "Best Practices", desc: "Production-ready patterns and guardrails", icon: Shield, num: "06" },
  { path: "/resources", title: "Resources", desc: "Curated links, papers, and tools", icon: ExternalLink, num: "07" },
];

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Learn Prompt Engineering</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Master the Art of<br />
            <span className="text-accent">Communicating with AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
            A comprehensive, beginner-friendly guide to crafting effective prompts for large language models. 
            Learn techniques used by professionals to get precise, useful outputs from AI systems.
          </p>
          <Link
            to="/introduction"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Module Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.path}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
          >
            <Link
              to={mod.path}
              className="block p-5 bg-card border border-border rounded-md hover:border-accent/40 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <mod.icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-mono text-muted-foreground">{mod.num}</span>
              </div>
              <h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">{mod.title}</h3>
              <p className="text-sm text-muted-foreground">{mod.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-4 p-6 bg-card border border-border rounded-md">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">7</div>
          <div className="text-sm text-muted-foreground">Modules</div>
        </div>
        <div className="text-center border-x border-border">
          <div className="text-2xl font-bold text-primary">30+</div>
          <div className="text-sm text-muted-foreground">Examples</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">Free</div>
          <div className="text-sm text-muted-foreground">Forever</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
