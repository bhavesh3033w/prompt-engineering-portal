import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface PromptBlockProps {
  children: string;
  variant?: "default" | "good" | "bad";
  label?: string;
}

const PromptBlock = ({ children, variant = "default", label }: PromptBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variantClass = variant === "good" ? "good-prompt" : variant === "bad" ? "bad-prompt" : "";

  return (
    <div className="relative mb-4 group">
      {label && (
        <div className={`text-xs font-semibold px-3 py-1 rounded-t-md inline-block ${
          variant === "good" ? "bg-good text-accent-foreground" : variant === "bad" ? "bg-bad text-destructive-foreground" : "bg-muted text-muted-foreground"
        }`}>
          {label}
        </div>
      )}
      <div className={`prompt-block ${variantClass} ${label ? "rounded-tl-none" : ""}`}>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 rounded bg-sidebar-accent text-sidebar-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy"
        >
          {copied ? <Check className="w-4 h-4 text-good" /> : <Copy className="w-4 h-4" />}
        </button>
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  );
};

export default PromptBlock;
