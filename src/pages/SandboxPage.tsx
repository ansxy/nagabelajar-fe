import { python } from "@codemirror/lang-python";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TerminalBox } from "../components/terminal";
import { useAuthContext } from "../hooks/AuthHook";
import { GetListCourse } from "../service/courseService";
import { Assigment, Course, CourseDetail } from "../types/CourseType";

type Tab = {
  id: number;
  name: string;
  code: string;
};

export const SandBox: React.FC = () => {
  const { token } = useAuthContext();
  const defaultCode = `#Code Here\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Tab 1",
      code: defaultCode,
    },
  ]);

  const [courses, setCourses] = useState<CourseDetail[]>();
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [assignments, setAssignments] = useState<Assigment[]>([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editingTabId, setEditingTabId] = useState<number | null>(null);
  const [newTabName, setNewTabName] = useState("");
  const [desc, setDesc] = useState<string>("");

  useEffect(() => {
    if (!token) return;
    const fetchCourses = async () => {
      const data = await GetListCourse();
      if (data.length > 0) {
        data.map((course: Course) => {
          setCourses(course.course_detail);
        });
      }
    };

    fetchCourses();
  }, [token]);

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const course_id = parseInt(event.target.value, 10);
    setSelectedCourse(course_id);
    const selectedCourseDetails = courses?.find(
      (c) => c.course_detail_id === course_id
    );
    setDesc("");
    setAssignments(selectedCourseDetails?.assigment || []);
  };

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      name: `Tab ${tabs.length + 1}`,
      code: defaultCode,
    };
    setTabs([...tabs, newTab]);
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

  const closeTab = (tabId: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);
    if (newTabs.length > 0) {
      setActiveTab(newTabs[0]);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row border-b-2 border-black justify-between">
        <ul className="flex flex-row overflow-hidden w-[80%]">
          <li className="font-thin text-[12px] text-gray-300 flex flex-col justify-center border-r-2 border-gray-400 cursor-pointer">
            <span className="p-1">SCRIPTS</span>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`font-thin text-[12px] flex items-center border-r-2 border-gray-400 cursor-pointer px-2 ${
                tab.id === activeTab.id
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onDoubleClick={() => startEditingTab(tab)}
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
                  className="p-1 text-black"
                />
              ) : (
                <span className="flex items-center">
                  {tab.name}
                  <X
                    onClick={() => closeTab(tab.id)}
                    className="ml-1"
                    size={15}
                  />
                </span>
              )}
            </li>
          ))}
          <li
            className="font-thin text-[12px] text-blue-600 border-r-2 border-gray-400 cursor-pointer flex items-center px-2 py-1"
            onClick={addTab}
          >
            <Plus width={"12px"} />
            <span className="ml-1">Add Tab</span>
          </li>
        </ul>
        <div className="border-l-2 border-black w-[30%]  flex flex-row gap-4">
          <select
            className="w-full border-gray-400 flex h-full p-2"
            value={selectedCourse ?? ""}
            onChange={handleCourseChange}
          >
            <option value="">Select a course</option>
            {!courses ? (
              <></>
            ) : (
              <>
                {courses.map((course) => (
                  <option
                    key={course.course_detail_id}
                    value={course.course_detail_id}
                  >
                    {course.name}
                  </option>
                ))}
              </>
            )}
          </select>
          <select
            className="w-full border-gray-400 flex h-full p-2"
            onChange={(e) =>
              setDesc(e.target.value === "" ? "" : assignments[0].description)
            }
          >
            <option value="">Select an assignment</option>
            {assignments.map((assignment) => (
              <option
                key={assignment.assigment_id}
                value={assignment.assigment_id}
              >
                {assignment.title}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="border-b-2 border-black flex flex-row w-full">
        <div className="flex flex-row w-[80%]">
          <ReactCodeMirror
            value={activeTab.code}
            theme={"none"}
            autoCorrect="true"
            extensions={[python()]}
            minHeight="500px"
            maxHeight="550px"
            className="w-full"
            onChange={(value) => {
              updateCode(value);
            }}
          />
        </div>
        <div className="w-[30%] border-l-2 border-black">{desc}</div>
      </section>
      <section className="border-b-2 border-black w-full">
        <ul className="flex flex-row">
          <li className="flex gap-5">
            <span className="text-black font-bold border-r-2 border-black p-2">
              TERMINAL
            </span>
          </li>
          <li className="flex gap-5">
            <span className="text-black font-bold border-r-2 border-black p-2">
              TEST CASE
            </span>
          </li>
        </ul>
      </section>
      <section>
        <TerminalBox code={activeTab.code} />
      </section>
    </div>
  );
};
