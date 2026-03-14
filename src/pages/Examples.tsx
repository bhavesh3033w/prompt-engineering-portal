import PageLayout from "@/components/PageLayout";
import PageNav from "@/components/PageNav";
import PromptBlock from "@/components/PromptBlock";
import KeyTakeaways from "@/components/KeyTakeaways";

const toc = [
  { id: "writing", label: "Content Writing" },
  { id: "coding", label: "Code Generation" },
  { id: "analysis", label: "Data Analysis" },
  { id: "summary", label: "Summarization" },
  { id: "creative", label: "Creative Tasks" },
];

const Examples = () => (
  <PageLayout
    title="Good vs Bad Prompts"
    subtitle="Learn by comparing ineffective and optimized prompts side by side"
    tableOfContents={toc}
  >
    <p>
      The best way to internalize prompt engineering is to see concrete comparisons. 
      Below are real-world scenarios showing how small changes create dramatically better outputs.
    </p>

    <h2 id="writing">Content Writing</h2>

    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div>
        <PromptBlock variant="bad" label="❌ Bad Prompt">
{`Write a blog post about AI.`}
        </PromptBlock>
        <p className="text-sm text-muted-foreground">Too vague — no topic, audience, tone, length, or structure specified.</p>
      </div>
      <div>
        <PromptBlock variant="good" label="✅ Good Prompt">
{`Write an 800-word blog post for a 
non-technical audience explaining 
how AI is transforming healthcare 
diagnostics. 

Use a conversational tone. Include:
- 3 real-world examples
- Potential risks section
- A hopeful conclusion

Format with H2 headings.`}
        </PromptBlock>
        <p className="text-sm text-muted-foreground">Specifies length, audience, topic, tone, structure, and format.</p>
      </div>
    </div>

    <h2 id="coding">Code Generation</h2>

    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div>
        <PromptBlock variant="bad" label="❌ Bad Prompt">
{`Write a login function.`}
        </PromptBlock>
      </div>
      <div>
        <PromptBlock variant="good" label="✅ Good Prompt">
{`Write a TypeScript login function for 
an Express.js API that:
1. Accepts email and password
2. Validates input with Zod
3. Checks bcrypt-hashed passwords
4. Returns a JWT token (1h expiry)
5. Handles errors with proper 
   HTTP status codes
6. Includes JSDoc comments

Use async/await pattern.`}
        </PromptBlock>
      </div>
    </div>

    <h2 id="analysis">Data Analysis</h2>

    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div>
        <PromptBlock variant="bad" label="❌ Bad Prompt">
{`Analyze this data.`}
        </PromptBlock>
      </div>
      <div>
        <PromptBlock variant="good" label="✅ Good Prompt">
{`Act as a data analyst. Given the 
following quarterly revenue data 
(in millions):
Q1: $12.3, Q2: $14.7, Q3: $11.2, Q4: $18.9

1. Calculate year-over-year growth
2. Identify the strongest quarter
3. Suggest 3 possible reasons 
   for the Q3 dip
4. Present findings in a table`}
        </PromptBlock>
      </div>
    </div>

    <h2 id="summary">Summarization</h2>

    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div>
        <PromptBlock variant="bad" label="❌ Bad Prompt">
{`Summarize this article.`}
        </PromptBlock>
      </div>
      <div>
        <PromptBlock variant="good" label="✅ Good Prompt">
{`Summarize the following article in 
exactly 3 bullet points. Each bullet 
should be one sentence, max 20 words. 
Focus on actionable insights rather 
than background information.

Article: [paste text]`}
        </PromptBlock>
      </div>
    </div>

    <h2 id="creative">Creative Tasks</h2>

    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div>
        <PromptBlock variant="bad" label="❌ Bad Prompt">
{`Write a story.`}
        </PromptBlock>
      </div>
      <div>
        <PromptBlock variant="good" label="✅ Good Prompt">
{`Write a 500-word science fiction 
short story set in 2085 about an AI 
that develops empathy. 

Style: literary fiction (think 
Ted Chiang). First-person POV from 
the AI's perspective. End with an 
ambiguous, thought-provoking line.

Themes: consciousness, loneliness.`}
        </PromptBlock>
      </div>
    </div>

    <KeyTakeaways items={[
      "Specific prompts consistently outperform vague ones across all domains",
      "Always specify: audience, format, length, tone, and structure",
      "For code: include language, framework, patterns, and error handling requirements",
      "For analysis: provide the data, specify the methods, and define the output format",
      "Constraints don't limit creativity — they focus it",
    ]} />

    <PageNav
      prev={{ path: "/techniques", label: "Techniques" }}
      next={{ path: "/llm-prompting", label: "Prompting for LLMs" }}
    />
  </PageLayout>
);

export default Examples;
