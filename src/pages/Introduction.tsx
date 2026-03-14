import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "what-is", label: "What is Prompt Engineering?" },
  { id: "why-matters", label: "Why It Matters" },
  { id: "how-llms-work", label: "How LLMs Interpret Prompts" },
  { id: "first-prompt", label: "Your First Prompt" },
];

const Introduction = () => (
  <PageLayout
    title="Introduction to Prompt Engineering"
    subtitle="Understanding the foundation of human-AI communication"
    tableOfContents={toc}
  >
    <h2 id="what-is">What is Prompt Engineering?</h2>
    <p>
      Prompt Engineering is the practice of designing and refining inputs (prompts) to AI language models 
      to elicit the most accurate, relevant, and useful outputs. It sits at the intersection of linguistics, 
      psychology, and computer science.
    </p>
    <p>
      Think of it as learning how to ask the right questions. Just as a well-phrased question to an expert 
      yields a better answer than a vague one, a well-crafted prompt produces superior AI responses.
    </p>

    <h2 id="why-matters">Why It Matters</h2>
    <p>
      As AI becomes integrated into workflows across industries—software development, content creation, 
      data analysis, customer support—the ability to effectively communicate with these systems becomes 
      a critical skill.
    </p>
    <ul>
      <li><strong>Productivity:</strong> Well-engineered prompts can save hours of back-and-forth iteration.</li>
      <li><strong>Quality:</strong> Better prompts produce more accurate, nuanced outputs.</li>
      <li><strong>Cost:</strong> Efficient prompts use fewer tokens, reducing API costs.</li>
      <li><strong>Safety:</strong> Proper prompt design helps avoid harmful or biased outputs.</li>
    </ul>

    <h2 id="how-llms-work">How LLMs Interpret Prompts</h2>
    <p>
      Large Language Models (LLMs) like GPT-4, Claude, and Gemini process your prompt as a sequence of tokens. 
      They predict the most likely continuation based on patterns learned during training. Understanding this 
      mechanism is key:
    </p>
    <ol>
      <li>Your prompt is tokenized into sub-word units</li>
      <li>The model processes these tokens through attention layers</li>
      <li>It generates output token by token, each influenced by the full context</li>
      <li>Parameters like temperature and top-p control randomness</li>
    </ol>

    <h2 id="first-prompt">Your First Prompt</h2>
    <p>Let's compare a vague prompt with an engineered one:</p>

    <PromptBlock variant="bad" label="❌ Vague Prompt">
{`Tell me about marketing.`}
    </PromptBlock>

    <PromptBlock variant="good" label="✅ Engineered Prompt">
{`Act as a digital marketing strategist with 10 years of experience. 
Explain the top 5 social media marketing strategies for a B2B SaaS 
startup with a $5,000 monthly budget. Include specific platforms, 
content types, and expected ROI metrics for each strategy.`}
    </PromptBlock>

    <p>
      Notice how the second prompt specifies a <strong>role</strong>, <strong>context</strong>, 
      <strong>constraints</strong>, and <strong>desired format</strong>. This dramatically improves 
      the quality of the response.
    </p>

    <KeyTakeaways items={[
      "Prompt engineering is about crafting precise inputs to get optimal AI outputs",
      "It's a critical skill as AI becomes ubiquitous in professional workflows",
      "LLMs predict continuations — context and specificity drive quality",
      "Always specify role, context, constraints, and format in your prompts",
    ]} />

    <PageNav next={{ path: "/concepts", label: "Basic Concepts" }} />
  </PageLayout>
);

export default Introduction;
