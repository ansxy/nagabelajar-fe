import React from "react";
import Markdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";
import { useLoaderData } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ExerciseComponent from "../components/exercise";
import { BaseResponse } from "../types/BaseResponseType";
import { CourseDetail } from "../types/CourseType";

export const CourseDetailPage: React.FC = () => {
  const response = useLoaderData() as BaseResponse<CourseDetail>;

  const renderers: Components = {
    code({
      inline,
      className,
      children,
      ...props
    }: {
      inline: boolean;
      className: string;
      children: React.ReactNode;
      props: unknown;
    }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
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
