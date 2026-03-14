import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "anatomy", label: "Anatomy of a Prompt" },
  { id: "roles", label: "Role Assignment" },
  { id: "context", label: "Context Setting" },
  { id: "constraints", label: "Constraints & Format" },
  { id: "temperature", label: "Temperature & Parameters" },
];

const Concepts = () => (
  <PageLayout
    title="Basic Concepts"
    subtitle="The fundamental building blocks of effective prompts"
    tableOfContents={toc}
  >
    <h2 id="anatomy">Anatomy of a Prompt</h2>
    <p>
      Every effective prompt consists of several key components. Understanding these components 
      allows you to systematically construct prompts that produce consistent, high-quality results.
    </p>

    <PromptBlock variant="good" label="Prompt Structure">
{`[Role] Act as a [specific expert]
[Context] Given [relevant background information]
[Task] [Specific action or question]
[Constraints] The response should be [format/length/style]
[Examples] For example: [optional few-shot examples]`}
    </PromptBlock>

    <h2 id="roles">Role Assignment</h2>
    <p>
      Assigning a role to the AI primes it to respond from a specific perspective, 
      using domain-appropriate vocabulary and reasoning patterns.
    </p>

    <PromptBlock variant="bad" label="❌ No Role">
{`How do I fix a memory leak?`}
    </PromptBlock>

    <PromptBlock variant="good" label="✅ With Role">
{`Act as a senior systems programmer specializing in C++ memory management. 
Explain the three most common causes of memory leaks in C++ applications 
and provide code examples showing both the problematic pattern and the fix.`}
    </PromptBlock>

    <h2 id="context">Context Setting</h2>
    <p>
      Context provides the AI with background information it needs to tailor its response. 
      This includes the audience, situation, constraints, and relevant facts.
    </p>
    <ul>
      <li><strong>Audience:</strong> "Explain this to a 5-year-old" vs "Explain to a PhD researcher"</li>
      <li><strong>Situation:</strong> "I'm building a startup MVP" vs "I'm optimizing an enterprise system"</li>
      <li><strong>Domain:</strong> "In the context of healthcare data" vs "For an e-commerce platform"</li>
    </ul>

    <h2 id="constraints">Constraints & Output Format</h2>
    <p>
      Specifying constraints tells the AI exactly what shape the answer should take:
    </p>

    <PromptBlock variant="good" label="Formatted Output Request">
{`List the top 5 JavaScript frameworks for building SPAs.

Format your response as a markdown table with these columns:
| Framework | Learning Curve | Performance | Community Size | Best For |

Keep each cell to 1-3 words maximum.`}
    </PromptBlock>

    <h2 id="temperature">Temperature & Parameters</h2>
    <p>
      When using APIs, you can control the model's behavior with parameters:
    </p>
    <ul>
      <li><strong>Temperature (0-2):</strong> Lower = more deterministic, Higher = more creative</li>
      <li><strong>Top-p (0-1):</strong> Controls diversity of token selection</li>
      <li><strong>Max tokens:</strong> Limits response length</li>
      <li><strong>Stop sequences:</strong> Tells the model when to stop generating</li>
    </ul>

    <PromptBlock label="API Parameters Example">
{`// For factual, consistent responses:
{ "temperature": 0.2, "top_p": 0.9 }

// For creative writing or brainstorming:
{ "temperature": 0.9, "top_p": 1.0 }

// For code generation:
{ "temperature": 0.1, "top_p": 0.95 }`}
    </PromptBlock>

    <KeyTakeaways items={[
      "Every prompt should have: Role, Context, Task, Constraints, and optionally Examples",
      "Role assignment primes the model to use domain-specific knowledge",
      "Explicit output format specifications dramatically improve consistency",
      "API parameters like temperature control the creativity vs. precision trade-off",
    ]} />

    <PageNav
      prev={{ path: "/introduction", label: "Introduction" }}
      next={{ path: "/techniques", label: "Techniques" }}
    />
  </PageLayout>
);

export default Concepts;
