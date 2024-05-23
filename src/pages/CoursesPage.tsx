import { Search } from "lucide-react";
import { Card, CardProps } from "../components/card";
import { Dropdown } from "../components/dropdown";

// type CourseFilter = {
//   sort: string;
//   search: string;
//   filter: string;
// };

const cardArray: CardProps[] = [
  {
    Code: "001",
    Title: "Introduction to TypeScript",
    Description:
      "Learn the basics of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    Code: "002",
    Title: "Advanced JavaScript",
    Description:
      "Deep dive into advanced concepts of JavaScript including closures, prototypes, and async programming.",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    Code: "003",
    Title: "Web Development with React",
    Description:
      "Build modern web applications using React, a popular JavaScript library for building user interfaces.",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
  },
  {
    Code: "004",
    Title: "Node.js for Backend",
    Description:
      "Learn how to create scalable backend applications using Node.js and Express.",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
  },
  {
    Code: "005",
    Title: "Database Design",
    Description:
      "Master the fundamentals of database design and SQL to manage and query data efficiently.",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
];

export const CoursesPage: React.FC = () => {
  // const [courseFilter, setCourseFilter] = useState<CourseFilter>({
  //   sort: "",
  //   search: "",
  //   filter: "",
  // });

  return (
    <div className="flex w-[80%] md:w-[75%] flex-col justify-center items-center ">
      <div className="flex w-full border-x-2 border-black">
        <section className="flex  justify-start flex-row-reverse w-full border-b-2 border-black p-2 gap-5">
          <div className="flex flex-row border-2 border-black py-2 px-5 rounded-full">
            <input placeholder="Search Course" />
            <Search />
          </div>
          {/* filter dropwdonw */}
          <Dropdown options={["Newest", "Oldest"]} />
        </section>
      </div>
      <section className="grid grid-cols-4 gap-5 px-10 py-5 border-x-2 border-b-2 border-black max-h-screen overflow-scroll w-full">
        {cardArray.map((card) => (
          <Card
            key={card.Code}
            Code={card.Code}
            Description={card.Description}
            Image={card.Image}
            Title={card.Title}
          />
        ))}
      </section>
    </div>
  );
};
