import React from "react";
import Markdown, { Components } from "react-markdown";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ExerciseComponent from "../components/exercise";
import { BaseResponse } from "../types/BaseResponseType";
import { CourseDetail } from "../types/CourseType";
import axiosInstance from "../utils/axios";

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
  const navigate = useNavigate();

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

  const handleFinishCourse = () => {
    const res = axiosInstance.post(
      `/certificate`,
      {
        course_id: response.data.course_id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    res.then((res) => {
      if (res.status === 200) {
        navigate("/profile");
      }
    });
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
      <section className="flex w-full flex-col">
        <div className="flex w-full items-center justify-center bg-green-600">
          <h1 className="p-4 text-white font-bold text-2xl">Assigment</h1>
        </div>
        <div className="flex w-full flex-col p-4">
          <ul className="flex flex-col gap-2 w-full">
            {response.data.assigment.map((assigment) => (
              <li
                key={assigment.assigment_id}
                className="flex flex-row gap-2 border-2 border-gray-500 p-2 w-full justify-between items-center cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out"
              >
                {assigment.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex w-full flex-row-reverse">
        <span
          className="bg-green-400 cursor-pointer"
          onClick={() => handleFinishCourse()}
        >
          <p className="font-bold text-2xl px-4 py-2">SELESAI</p>
        </span>
      </section>
    </div>
  );
};
