import { python } from "@codemirror/lang-python";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Edit3, Plus } from "lucide-react";
import { useState } from "react";
import { TerminalBox } from "../components/terminal";

type Tab = {
  id: number;
  name: string;
  code: string;
};

export const SandBox: React.FC = () => {
  const defaultCode = `#Code Here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;

  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Tab 1",
      code: defaultCode,
    },
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editingTabId, setEditingTabId] = useState<number | null>(null);
  const [newTabName, setNewTabName] = useState("");

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      name: `Tab ${tabs.length + 1}`,
      code: defaultCode,
    };
    setTabs([newTab, ...tabs]);
    setActiveTab(newTab);
  };

  const updateCode = (value: string) => {
    setActiveTab({ ...activeTab, code: value });
    setTabs(
      tabs.map((tab) =>
        tab.id === activeTab.id ? { ...tab, code: value } : tab
      )
    );
  };

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const startEditingTab = (tab: Tab) => {
    setEditingTabId(tab.id);
    setNewTabName(tab.name);
  };

  const saveTabName = (tab: Tab) => {
    setTabs(
      tabs.map((t) => (t.id === tab.id ? { ...t, name: newTabName } : t))
    );
    setEditingTabId(null);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row border-b-2 border-black">
        <ul className="flex flex-row-reverse">
          <li
            className="font-thin text-lg text-blue-600 border-r-2 border-gray-400 cursor-pointer"
            onClick={addTab}
          >
            <span className="flex justify-center p-2">
              <Plus absoluteStrokeWidth /> Add Tab
            </span>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`font-thin text-lg flex text-gray-300 border-r-2 border-gray-400 cursor-pointer ${
                tab.id === activeTab.id ? "bg-gray-200 text-blue-700" : ""
              }`}
              onClick={() => switchTab(tab)}
            >
              {editingTabId === tab.id ? (
                <input
                  value={newTabName}
                  onChange={(e) => setNewTabName(e.target.value)}
                  onBlur={() => saveTabName(tab)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveTabName(tab);
                  }}
                  className="p-2 text-black"
                />
              ) : (
                <span className="p-2 flex items-center">
                  {tab.name}
                  <Edit3
                    onClick={() => startEditingTab(tab)}
                    className="ml-2 "
                    size={16}
                  />
                </span>
              )}
            </li>
          ))}
          <li className="font-thin text-lg text-gray-300 flex border-r-2 border-gray-400 cursor-pointer">
            <span className="p-2 ">SCRIPTS</span>
          </li>
        </ul>
      </section>
      <section className="border-b-2 border-black">
        <ReactCodeMirror
          value={activeTab.code}
          theme={"none"}
          autoCorrect="true"
          extensions={[python()]}
          minHeight="500px"
          maxHeight="550px"
          onChange={(value) => {
            updateCode(value);
          }}
        />
      </section>
      <section className="border-b-2 border-black w-full">
        <ul className="flex flex-row">
          <li className="flex p-2">
            <span className="text-black font-bold">TERMINAL</span>
          </li>
        </ul>
      </section>
      <section>
        <TerminalBox code={activeTab.code} />
      </section>
    </div>
  );
};
