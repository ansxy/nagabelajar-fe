import { python } from "@codemirror/lang-python";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { Exercise } from "../types/CourseType";
import { TerminalBox } from "./terminal";

const decodeContent = (content: string) => {
  return content.replace(/\\n/g, "\n").replace(/\\"/g, '"');
};

const ExerciseComponent: React.FC<Exercise> = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full select-none rounded-md bg-white text-sm">
      <section className="flex flex-row items-center justify-between gap-2 rounded-t-md bg-slate-300 px-5">
        <div className="flex flex-row gap-5">
          <div className="h-[16px] w-[16px] rounded-full bg-red-400"></div>
          <div className="h-[16px] w-[16px] rounded-full bg-orange-400"></div>
          <div className="h-[16px] w-[16px] rounded-full bg-green-400"></div>
        </div>
        <p className="">{title}</p>
        <button className="ml-6 p-2" onClick={() => setActive(!active)}>
          {active ? "Back To Code" : "Try It"}
        </button>
      </section>
      <section className="flex flex-col p-2">
        {!active ? (
          <CodeMirror
            readOnly
            extensions={[python()]}
            value={decodeContent(content)}
            minHeight="200px"
            maxHeight="300px"
          />
        ) : (
          <TerminalBox code={decodeContent(content)} />
        )}
      </section>
    </div>
  );
};

export default ExerciseComponent;
