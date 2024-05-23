import { python } from "@codemirror/lang-python";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { TerminalBox } from "../components/terminal";

export const SandBox: React.FC = () => {
  const [code, setCode] = useState(
    `#Code Here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
  );
  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex w-4/5 flex-col justify-center border-b-2 border-black ">
        <div className=" w-full">
          <h1 className="text-3xl font-bold">SandBox</h1>
          <div className="flex flex-row gap-5 items-center  rounded-t-md border-2 border-black bg-slate-300 p-3 px-5">
            <span className="h-[16px] w-[16px] rounded-full bg-red-400"></span>
            <span className="h-[16px] w-[16px] rounded-full bg-orange-400"></span>
            <span className="h-[16px] w-[16px] rounded-full bg-green-400"></span>
          </div>
          <div className="border-x-2 border-b-2 border-black/30">
            <CodeMirror
              value={code}
              theme={"none"}
              autoCorrect="true"
              extensions={[python()]}
              minHeight="500px"
              maxHeight="550px"
              onChange={(value) => {
                setCode(value);
              }}
            />
          </div>
        </div>
        <div className="bg-slate-300">
          <TerminalBox code={code} />
        </div>
      </div>
    </div>
  );
};
