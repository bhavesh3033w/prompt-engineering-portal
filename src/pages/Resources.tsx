import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import { ExternalLink } from "lucide-react";

const toc = [
  { id: "papers", label: "Research Papers" },
  { id: "courses", label: "Courses & Tutorials" },
  { id: "tools", label: "Tools & Platforms" },
  { id: "communities", label: "Communities" },
  { id: "books", label: "Books" },
];

const ResourceLink = ({ title, url, desc }: { title: string; url: string; desc: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 bg-card border border-border rounded-md hover:border-accent/40 transition-colors group"
  >
    <div className="flex items-start justify-between">
      <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{title}</h4>
      <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
    </div>
    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
  </a>
);

const Resources = () => (
  <PageLayout
    title="Resources & References"
    subtitle="Curated collection of papers, tools, courses, and communities"
    tableOfContents={toc}
  >
    <h2 id="papers">Research Papers</h2>
    <div className="space-y-3 my-4">
      <ResourceLink title="Chain-of-Thought Prompting Elicits Reasoning" url="https://arxiv.org/abs/2201.11903" desc="The foundational paper by Wei et al. introducing chain-of-thought prompting for LLMs." />
      <ResourceLink title="Large Language Models are Zero-Shot Reasoners" url="https://arxiv.org/abs/2205.11916" desc="Shows that simply adding 'Let's think step by step' dramatically improves reasoning." />
      <ResourceLink title="Self-Consistency Improves Chain of Thought" url="https://arxiv.org/abs/2203.11171" desc="Sampling multiple reasoning paths and selecting the most consistent answer." />
      <ResourceLink title="Tree of Thoughts" url="https://arxiv.org/abs/2305.10601" desc="Extends chain-of-thought by exploring multiple reasoning paths simultaneously." />
    </div>

    <h2 id="courses">Courses & Tutorials</h2>
    <div className="space-y-3 my-4">
      <ResourceLink title="DeepLearning.AI: ChatGPT Prompt Engineering" url="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" desc="Free course by Andrew Ng and Isa Fulford covering prompt engineering for developers." />
      <ResourceLink title="OpenAI Prompt Engineering Guide" url="https://platform.openai.com/docs/guides/prompt-engineering" desc="Official best practices guide from OpenAI for GPT models." />
      <ResourceLink title="Anthropic Prompt Engineering Guide" url="https://docs.anthropic.com/claude/docs/prompt-engineering" desc="Comprehensive guide from Anthropic for prompting Claude effectively." />
      <ResourceLink title="Google Prompt Engineering Guide" url="https://ai.google.dev/docs/prompt_best_practices" desc="Google's official guide for prompting Gemini models." />
    </div>

    <h2 id="tools">Tools & Platforms</h2>
    <div className="space-y-3 my-4">
      <ResourceLink title="LangChain" url="https://langchain.com" desc="Framework for developing applications powered by language models with prompt management." />
      <ResourceLink title="PromptPerfect" url="https://promptperfect.jina.ai" desc="AI-powered tool that automatically optimizes prompts for different models." />
      <ResourceLink title="OpenAI Playground" url="https://platform.openai.com/playground" desc="Interactive environment for testing and refining prompts with various parameters." />
    </div>

    <h2 id="communities">Communities</h2>
    <div className="space-y-3 my-4">
      <ResourceLink title="r/PromptEngineering" url="https://reddit.com/r/PromptEngineering" desc="Active Reddit community sharing techniques, tips, and prompt examples." />
      <ResourceLink title="Learn Prompting Discord" url="https://discord.gg/learnprompting" desc="Community Discord for discussing prompt engineering and sharing resources." />
    </div>

    <h2 id="books">Books</h2>
    <div className="space-y-3 my-4">
      <ResourceLink title="The Art of Prompt Engineering" url="https://www.amazon.com" desc="Comprehensive guide covering fundamentals through advanced techniques for all major LLMs." />
      <ResourceLink title="Prompt Engineering for Generative AI" url="https://www.oreilly.com" desc="O'Reilly publication covering practical prompt engineering patterns and best practices." />
    </div>

    <PageNav prev={{ path: "/best-practices", label: "Best Practices" }} />
  </PageLayout>
);

export default Resources;
