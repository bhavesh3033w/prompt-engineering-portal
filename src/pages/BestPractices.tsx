import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "clarity", label: "Be Clear & Specific" },
  { id: "iterate", label: "Iterate Relentlessly" },
  { id: "guard", label: "Guardrails & Safety" },
  { id: "eval", label: "Evaluate Outputs" },
  { id: "document", label: "Document Your Prompts" },
  { id: "checklist", label: "Prompt Checklist" },
];

const BestPractices = () => (
  <PageLayout
    title="Best Practices"
    subtitle="Production-ready patterns and principles for reliable AI outputs"
    tableOfContents={toc}
  >
    <h2 id="clarity">1. Be Clear and Specific</h2>
    <p>
      Ambiguity is the enemy of good prompts. Every word should serve a purpose. 
      If you can remove a sentence without changing the output, remove it. 
      If you can add a constraint to prevent a common mistake, add it.
    </p>
    <ul>
      <li>Use precise language over vague descriptors</li>
      <li>Quantify whenever possible ("3 examples" not "some examples")</li>
      <li>Specify what you <strong>don't</strong> want as well as what you do</li>
    </ul>

    <h2 id="iterate">2. Iterate Relentlessly</h2>
    <p>
      The first prompt is rarely the best. Professional prompt engineers iterate 5-20 times 
      on critical prompts. Each iteration should address a specific issue observed in the output.
    </p>

    <PromptBlock label="Iteration Example">
{`// Iteration 1: Basic
"Summarize this article"

// Iteration 2: Add constraints  
"Summarize this article in 3 bullet points"

// Iteration 3: Add quality criteria
"Summarize this article in 3 bullet points, each 
under 20 words, focusing on actionable insights"

// Iteration 4: Add format + anti-patterns
"Summarize this article in exactly 3 bullet points.
- Each bullet: one sentence, max 20 words
- Focus on actionable insights, not background
- Do NOT include statistics or dates
- Start each bullet with a verb"`}
    </PromptBlock>

    <h2 id="guard">3. Implement Guardrails</h2>
    <p>
      For production applications, add safety constraints to prevent harmful, 
      inaccurate, or off-topic responses.
    </p>

    <PromptBlock variant="good" label="Guardrail Example">
{`Rules you MUST follow:
1. If you don't know the answer, say "I don't know"
2. Never make up statistics or cite non-existent studies
3. If the question is about medical/legal advice, 
   add a disclaimer recommending professional consultation
4. Stay on topic — if the user tries to redirect to 
   unrelated subjects, politely redirect back
5. Do not generate harmful, biased, or discriminatory content`}
    </PromptBlock>

    <h2 id="eval">4. Evaluate Your Outputs</h2>
    <p>
      Don't just accept the first output. Develop evaluation criteria:
    </p>
    <ul>
      <li><strong>Accuracy:</strong> Are the facts correct and verifiable?</li>
      <li><strong>Completeness:</strong> Does it cover all requested points?</li>
      <li><strong>Format:</strong> Does it follow the specified structure?</li>
      <li><strong>Tone:</strong> Is it appropriate for the target audience?</li>
      <li><strong>Actionability:</strong> Can someone act on this output immediately?</li>
    </ul>

    <h2 id="document">5. Document Your Prompts</h2>
    <p>
      Treat prompts like code. Version them, document what they do, 
      and note what changes improved outputs.
    </p>

    <PromptBlock label="Prompt Documentation Template">
{`# Prompt: Customer Email Classifier
# Version: 2.3
# Author: [name]
# Last Updated: 2024-01-15
# Purpose: Classify incoming customer emails 
# Categories: billing, technical, feedback, spam
# Notes: v2.3 added "spam" category, improved 
#        accuracy on billing vs. technical by 
#        adding distinguishing examples
# Accuracy: 94% on test set of 200 emails

[prompt content here]`}
    </PromptBlock>

    <h2 id="checklist">Prompt Engineering Checklist</h2>
    <div className="bg-card border border-border rounded-md p-5 my-4">
      <ul className="space-y-2">
        {[
          "Role or persona assigned?",
          "Context and background provided?",
          "Task clearly stated?",
          "Output format specified?",
          "Length/word count defined?",
          "Examples included (if complex task)?",
          "Anti-patterns listed (what NOT to do)?",
          "Edge cases considered?",
          "Tested across multiple runs?",
          "Documented and versioned?",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-foreground">
            <span className="w-5 h-5 border-2 border-border rounded flex items-center justify-center text-xs shrink-0">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    <KeyTakeaways items={[
      "Clarity and specificity are the most important qualities of any prompt",
      "Professional prompts go through 5-20 iterations before deployment",
      "Production prompts need guardrails for safety and accuracy",
      "Evaluate outputs against specific criteria, not just gut feel",
      "Document and version your prompts like you would code",
    ]} />

    <PageNav
      prev={{ path: "/llm-prompting", label: "Prompting for LLMs" }}
      next={{ path: "/resources", label: "Resources" }}
    />
  </PageLayout>
);

export default BestPractices;
