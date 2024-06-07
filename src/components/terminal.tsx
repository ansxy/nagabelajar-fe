import { Terminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css"; // Import the xterm.css for styling
import { PlayIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";
import { UpdateProgress } from "../service/courseService";

interface TerminalBoxProps {
  code: string;
}

export const TerminalBox: React.FC<TerminalBoxProps> = ({ code }) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const terminalInstance = useRef<Terminal | null>(null);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalInstance.current = new Terminal({
        theme: {
          foreground: "white",
        },
        cursorBlink: true,
        tabStopWidth: 4,
        fontFamily: "Fira Code",
        fontSize: 16,
      });
      socket.current = io(`${import.meta.env.VITE_COMPILER_URL}playground`);
      terminalInstance.current.open(terminalRef.current);
      terminalInstance.current.write("Welcome To Sandbox x.x!\r\n");
      socket.current.on("output", (data) => {
        if (data.includes("Error")) {
          terminalInstance.current?.write("\x1b[31m" + data + "\x1b[0m");
        } else {
          terminalInstance.current?.write(data);
        }
      });

      terminalInstance.current.onData((data) => {
        socket.current?.emit("input", data);
      });
    }

    return () => {
      if (terminalInstance.current) {
        terminalInstance.current.dispose();
      }
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  const runCode = () => {
    UpdateProgress("3");
    if (socket.current) {
      socket.current.emit("TestCode", code);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-2">
        <button className="bg-green-500" onClick={runCode}>
          <p className="py-2 px-6 text-white hover:text-black flex gap-2">
            Run <PlayIcon size={24} />
          </p>
        </button>
      </div>
      <div
        ref={terminalRef}
        className="max-h-52 overflow-y-scroll bg-black p-5"
      ></div>
    </div>
  );
};
