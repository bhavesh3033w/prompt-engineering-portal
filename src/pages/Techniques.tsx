import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "zero-shot", label: "Zero-Shot Prompting" },
  { id: "few-shot", label: "Few-Shot Prompting" },
  { id: "cot", label: "Chain-of-Thought" },
  { id: "decomposition", label: "Task Decomposition" },
  { id: "iterative", label: "Iterative Refinement" },
  { id: "meta", label: "Meta-Prompting" },
];

const Techniques = () => (
  <PageLayout
    title="Prompt Design Techniques"
    subtitle="Advanced methods for getting superior AI outputs"
    tableOfContents={toc}
  >
    <h2 id="zero-shot">Zero-Shot Prompting</h2>
    <p>
      Zero-shot prompting means asking the model to perform a task without providing any examples. 
      The model relies entirely on its pre-trained knowledge.
    </p>

    <PromptBlock label="Zero-Shot Example">
{`Classify the following text as positive, negative, or neutral sentiment:

"The new update completely broke my workflow and I've 
wasted 3 hours trying to fix it."

Sentiment:`}
    </PromptBlock>

    <h2 id="few-shot">Few-Shot Prompting</h2>
    <p>
      Few-shot prompting provides the model with examples of the desired input-output pattern 
      before presenting the actual task. This is one of the most powerful techniques.
    </p>

    <PromptBlock variant="good" label="Few-Shot Example">
{`Classify the sentiment of each review:

Review: "Absolutely love this product! Best purchase ever."
Sentiment: Positive

Review: "It works fine, nothing special."
Sentiment: Neutral

Review: "Terrible quality, broke after one day."
Sentiment: Negative

Review: "The delivery was late but the product exceeded expectations."
Sentiment:`}
    </PromptBlock>

    <h2 id="cot">Chain-of-Thought (CoT) Prompting</h2>
    <p>
      Chain-of-thought prompting asks the model to show its reasoning step by step. 
      This dramatically improves performance on complex reasoning tasks like math, logic, 
      and multi-step problems.
    </p>

    <PromptBlock variant="bad" label="❌ Without CoT">
{`A store has 45 apples. They sell 60% on Monday and half of the 
remaining on Tuesday. How many are left?`}
    </PromptBlock>

    <PromptBlock variant="good" label="✅ With CoT">
{`A store has 45 apples. They sell 60% on Monday and half of the 
remaining on Tuesday. How many are left?

Let's think through this step by step:
1. Start with the total
2. Calculate Monday's sales
3. Find remaining after Monday
4. Calculate Tuesday's sales
5. Find the final count`}
    </PromptBlock>

    <h2 id="decomposition">Task Decomposition</h2>
    <p>
      Breaking complex tasks into smaller, manageable sub-tasks often produces better results 
      than asking the model to handle everything at once.
    </p>

    <PromptBlock variant="good" label="Decomposed Task">
{`I need to write a technical blog post about React Server Components.

Step 1: First, create an outline with 5 main sections.
Step 2: For each section, write 2-3 key points to cover.
Step 3: Write the introduction (150 words).
Step 4: Now let's work through each section one at a time.

Let's start with Step 1. Create the outline:`}
    </PromptBlock>

    <h2 id="iterative">Iterative Refinement</h2>
    <p>
      Iterative refinement involves progressively improving a prompt based on the model's outputs. 
      This is particularly useful for complex or creative tasks.
    </p>
    <ol>
      <li>Start with a basic prompt</li>
      <li>Analyze the output for gaps or errors</li>
      <li>Add constraints or clarifications to address issues</li>
      <li>Repeat until the output meets requirements</li>
    </ol>

    <h2 id="meta">Meta-Prompting</h2>
    <p>
      Meta-prompting asks the AI to help you write better prompts. This is an underutilized 
      but powerful technique.
    </p>

    <PromptBlock variant="good" label="Meta-Prompt">
{`I want to use an AI to help me write a product description for a 
new wireless earbud. What would be the most effective prompt to get 
a compelling, SEO-optimized product description? 

Include the specific elements I should mention in my prompt, 
the ideal format, and any constraints I should specify.`}
    </PromptBlock>

    <KeyTakeaways items={[
      "Zero-shot works for simple tasks; few-shot dramatically improves complex ones",
      "Chain-of-thought is essential for math, logic, and multi-step reasoning",
      "Decompose complex tasks into sequential sub-tasks for better results",
      "Iterative refinement is a process, not a single prompt",
      "Meta-prompting leverages the AI to improve your own prompting skills",
    ]} />

    <PageNav
      prev={{ path: "/concepts", label: "Basic Concepts" }}
      next={{ path: "/examples", label: "Good vs Bad Prompts" }}
    />
  </PageLayout>
);

export default Techniques;
