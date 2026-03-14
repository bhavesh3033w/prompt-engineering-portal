import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "chatgpt", label: "ChatGPT / GPT-4" },
  { id: "claude", label: "Claude" },
  { id: "gemini", label: "Gemini" },
  { id: "system", label: "System Prompts" },
  { id: "api", label: "API vs Chat Interface" },
];

const LLMPrompting = () => (
  <PageLayout
    title="Prompting for LLMs"
    subtitle="Platform-specific strategies for ChatGPT, Claude, Gemini, and more"
    tableOfContents={toc}
  >
    <p>
      While prompt engineering principles are universal, each LLM has characteristics that 
      reward slightly different approaches. Understanding these nuances helps you get the most 
      from each platform.
    </p>

    <h2 id="chatgpt">ChatGPT / GPT-4</h2>
    <p>
      OpenAI's models respond well to structured instructions and are particularly strong at 
      following specific output formats.
    </p>
    <ul>
      <li><strong>Custom Instructions:</strong> Use the system message to set persistent behavior</li>
      <li><strong>Markdown:</strong> GPT-4 naturally produces well-formatted markdown</li>
      <li><strong>Multi-turn:</strong> Builds context across conversations effectively</li>
    </ul>

    <PromptBlock variant="good" label="ChatGPT Optimized Prompt">
{`System: You are a senior Python developer who writes clean, 
PEP-8 compliant code with comprehensive docstrings.

User: Create a Python class for managing a task queue with:
- Priority levels (high, medium, low)
- FIFO ordering within same priority
- Thread-safe operations
- Methods: add_task(), get_next(), peek(), size()

Include type hints and unit test examples.`}
    </PromptBlock>

    <h2 id="claude">Claude</h2>
    <p>
      Anthropic's Claude excels at nuanced analysis, long-context tasks, and following 
      detailed instructions. It responds particularly well to XML-structured prompts.
    </p>

    <PromptBlock variant="good" label="Claude Optimized Prompt">
{`<task>
Analyze the following business proposal and provide feedback.
</task>

<context>
I'm a startup founder seeking Series A funding. The proposal 
is for a B2B SaaS product in the HR tech space.
</context>

<instructions>
1. Evaluate the market sizing methodology
2. Identify the 3 weakest arguments
3. Suggest improvements for each weakness
4. Rate overall investor-readiness (1-10)
</instructions>

<format>
Use headers for each section. Be direct and specific.
</format>`}
    </PromptBlock>

    <h2 id="gemini">Gemini</h2>
    <p>
      Google's Gemini models are strong at multimodal tasks and have access to real-time 
      information through Google Search integration.
    </p>
    <ul>
      <li><strong>Multimodal:</strong> Can analyze images, videos, and documents</li>
      <li><strong>Grounding:</strong> Can verify claims with Google Search</li>
      <li><strong>Long context:</strong> Supports very large context windows</li>
    </ul>

    <h2 id="system">System Prompts</h2>
    <p>
      System prompts (or system messages) define the AI's behavior, personality, and constraints 
      before the user conversation begins. They're available in API access for most platforms.
    </p>

    <PromptBlock variant="good" label="System Prompt Example">
{`You are a medical information assistant. Follow these rules:

1. NEVER provide specific medical diagnoses
2. Always recommend consulting a healthcare professional
3. Cite sources when referencing medical studies
4. Use plain language, avoid jargon unless asked
5. If unsure, say "I don't have enough information"
6. Format responses with clear sections and bullet points`}
    </PromptBlock>

    <h2 id="api">API vs Chat Interface</h2>
    <p>
      Using LLMs through their API gives you additional control:
    </p>

    <PromptBlock label="API Request Example">
{`// OpenAI API Example
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { 
      role: "system", 
      content: "You are a concise technical writer." 
    },
    { 
      role: "user", 
      content: "Explain WebSockets in 3 sentences." 
    }
  ],
  temperature: 0.3,
  max_tokens: 200,
});`}
    </PromptBlock>

    <KeyTakeaways items={[
      "Each LLM has strengths: GPT-4 for structure, Claude for analysis, Gemini for multimodal",
      "Claude responds well to XML-structured prompts with clear sections",
      "System prompts set persistent behavior and safety guardrails",
      "API access provides more control (temperature, tokens) than chat interfaces",
      "Always test the same prompt across models to find the best fit for your task",
    ]} />

    <PageNav
      prev={{ path: "/examples", label: "Good vs Bad Prompts" }}
      next={{ path: "/best-practices", label: "Best Practices" }}
    />
  </PageLayout>
);

export default LLMPrompting;
