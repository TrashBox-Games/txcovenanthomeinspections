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
          h2: ({ children }) => (
            <h2 className="mb-stack-sm mt-stack-lg font-headline text-xl font-semibold text-primary first:mt-0">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className={paragraphVariants[variant]}>{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-stack-md list-disc space-y-2 pl-6 text-base leading-7 text-on-surface-variant last:mb-0">
              {children}
            </ul>
          ),
          li: ({ children }) => <li>{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              {...(href?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
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
