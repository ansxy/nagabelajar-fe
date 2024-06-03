import React from "react";
import Markdown, { Components } from "react-markdown";
import { useLoaderData } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ExerciseComponent from "../components/exercise";
import { BaseResponse } from "../types/BaseResponseType";
import { CourseDetail } from "../types/CourseType";

const CodeBlock = ({
  language,
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) => (
  <SyntaxHighlighter style={vscDarkPlus} language={language} PreTag="div">
    {String(children).replace(/\n$/, "")}
  </SyntaxHighlighter>
);

export const CourseDetailPage: React.FC = () => {
  const response = useLoaderData() as BaseResponse<CourseDetail>;

  const renderers: Components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock language={match[1]}>{children}</CodeBlock>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="flex w-[80%] md:w-[75%] flex-col justify-center items-center border-black border-x-2 ">
      <section className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl p-5">{response.data.name}</h1>
        <div className="flex flex-col p-10">
          <h2 className="font-bold text-xl">Tujuan</h2>
          <p className="font-">{response.data.objective}</p>
        </div>
      </section>
      <section className="p-10 flex flex-col gap-4">
        {response.data.content.map((content, index) => (
          <React.Fragment key={index}>
            <h3>{content.title}</h3>
            <Markdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={renderers}
            >
              {content.course_content}
            </Markdown>

            {content.exercise?.map((exercise) => (
              <ExerciseComponent
                key={exercise.course_content_id}
                title={exercise.title}
                content={exercise.content}
              />
            ))}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
};
