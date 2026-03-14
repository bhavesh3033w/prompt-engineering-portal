import { Lightbulb } from "lucide-react";

const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="bg-accent/10 border border-accent/30 rounded-md p-5 my-6">
    <h4 className="flex items-center gap-2 font-semibold text-primary mb-3">
      <Lightbulb className="w-5 h-5 text-accent" />
      Key Takeaways
    </h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-foreground">
          <span className="text-accent font-bold mt-0.5">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default KeyTakeaways;
