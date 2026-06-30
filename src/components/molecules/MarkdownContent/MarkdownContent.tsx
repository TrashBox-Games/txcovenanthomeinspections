import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

const paragraphVariants = {
  default:
    "mb-stack-md text-base leading-7 text-on-surface-variant last:mb-0",
  article:
    "mb-stack-lg text-lg leading-8 font-medium text-on-surface last:mb-0",
} as const;

interface MarkdownContentProps {
  content: string;
  className?: string;
  variant?: keyof typeof paragraphVariants;
}

export function MarkdownContent({
  content,
  className,
  variant = "default",
}: MarkdownContentProps) {
  return (
    <div className={cn(className)}>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className={paragraphVariants[variant]}>{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline transition-colors hover:text-tertiary"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
