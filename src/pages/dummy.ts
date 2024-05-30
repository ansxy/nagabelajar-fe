import { Course } from "../types/CourseType";

export const dummyCourses: Course[] = [
  {
    course_id: 1,
    name: "Introduction to Programming",
    code: "CS101",
    category_id: 1,
    price: 100,
    description:
      "Learn the basics of programming with this introductory course.",
    media_id: "m1",
    is_paid: true,
    is_archived: false,
    author: "John Doe",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 1,
      name: "Computer Science",
      created_at: "2023-01-01T00:00:00Z",
      updated_at: "2023-01-01T00:00:00Z",
    },
    media: {
      media_id: "m1",
      name: "Programming Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-01-01T00:00:00Z",
      updated_at: "2023-01-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 1,
        name: "Chapter 1: Basics",
        objective: "Understand the fundamentals of programming.",
        position: 1,
        course_id: 1,
        content: [
          {
            course_content_id: 1,
            course_detail_id: 1,
            title: "What is Programming?",
            course_content:
              "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
            sub_content: [
              {
                course_subcontent_id: 1,
                title: "Introduction",
                content: "This section introduces programming.",
                course_content_id: 1,
              },
            ],
            exercise: [
              {
                course_exercise_id: 1,
                title: "Exercise 1",
                content: "Write a simple program.",
                course_content_id: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 2,
    name: "Advanced Mathematics",
    code: "MATH201",
    category_id: 2,
    price: 150,
    description:
      "Explore advanced mathematical concepts in this comprehensive course.",
    media_id: "m2",
    is_paid: true,
    is_archived: false,
    author: "Jane Smith",
    created_at: "2023-02-01T00:00:00Z",
    updated_at: "2023-02-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 2,
      name: "Mathematics",
      created_at: "2023-02-01T00:00:00Z",
      updated_at: "2023-02-01T00:00:00Z",
    },
    media: {
      media_id: "m2",
      name: "Mathematics Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-02-01T00:00:00Z",
      updated_at: "2023-02-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 2,
        name: "Chapter 1: Algebra",
        objective: "Master algebraic techniques.",
        position: 1,
        course_id: 2,
        content: [
          {
            course_content_id: 2,
            course_detail_id: 2,
            title: "Basic Algebra",
            course_content:
              "Algebra involves the study of symbols and the rules for manipulating those symbols.",
            sub_content: [
              {
                course_subcontent_id: 2,
                title: "Introduction to Algebra",
                content: "This section covers the basics of algebra.",
                course_content_id: 2,
              },
            ],
            exercise: [
              {
                course_exercise_id: 2,
                title: "Exercise 1",
                content: "Solve basic algebraic equations.",
                course_content_id: 2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 3,
    name: "Data Science Fundamentals",
    code: "DS101",
    category_id: 1,
    price: 120,
    description:
      "Learn the basics of data science, including data analysis and visualization.",
    media_id: "m3",
    is_paid: true,
    is_archived: false,
    author: "Alice Johnson",
    created_at: "2023-03-01T00:00:00Z",
    updated_at: "2023-03-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 1,
      name: "Computer Science",
      created_at: "2023-03-01T00:00:00Z",
      updated_at: "2023-03-01T00:00:00Z",
    },
    media: {
      media_id: "m3",
      name: "Data Science Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-03-01T00:00:00Z",
      updated_at: "2023-03-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 3,
        name: "Chapter 1: Introduction",
        objective: "Understand the basics of data science.",
        position: 1,
        course_id: 3,
        content: [
          {
            course_content_id: 3,
            course_detail_id: 3,
            title: "What is Data Science?",
            course_content:
              "Data science involves using scientific methods, processes, and algorithms to extract knowledge and insights from data.",
            sub_content: [
              {
                course_subcontent_id: 3,
                title: "Introduction",
                content: "This section introduces data science.",
                course_content_id: 3,
              },
            ],
            exercise: [
              {
                course_exercise_id: 3,
                title: "Exercise 1",
                content: "Analyze a dataset.",
                course_content_id: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 4,
    name: "Machine Learning Basics",
    code: "ML101",
    category_id: 1,
    price: 130,
    description:
      "An introductory course on machine learning concepts and techniques.",
    media_id: "m4",
    is_paid: true,
    is_archived: false,
    author: "Bob Brown",
    created_at: "2023-04-01T00:00:00Z",
    updated_at: "2023-04-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 1,
      name: "Computer Science",
      created_at: "2023-04-01T00:00:00Z",
      updated_at: "2023-04-01T00:00:00Z",
    },
    media: {
      media_id: "m4",
      name: "Machine Learning Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-04-01T00:00:00Z",
      updated_at: "2023-04-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 4,
        name: "Chapter 1: Basics",
        objective: "Learn the fundamentals of machine learning.",
        position: 1,
        course_id: 4,
        content: [
          {
            course_content_id: 4,
            course_detail_id: 4,
            title: "Introduction to Machine Learning",
            course_content:
              "Machine learning is a method of data analysis that automates analytical model building.",
            sub_content: [
              {
                course_subcontent_id: 4,
                title: "Introduction",
                content: "This section introduces machine learning.",
                course_content_id: 4,
              },
            ],
            exercise: [
              {
                course_exercise_id: 4,
                title: "Exercise 1",
                content: "Build a simple machine learning model.",
                course_content_id: 4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 5,
    name: "Web Development Basics",
    code: "WD101",
    category_id: 1,
    price: 110,
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript.",
    media_id: "m5",
    is_paid: true,
    is_archived: false,
    author: "Charlie Davis",
    created_at: "2023-05-01T00:00:00Z",
    updated_at: "2023-05-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 1,
      name: "Computer Science",
      created_at: "2023-05-01T00:00:00Z",
      updated_at: "2023-05-01T00:00:00Z",
    },
    media: {
      media_id: "m5",
      name: "Web Development Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-05-01T00:00:00Z",
      updated_at: "2023-05-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 5,
        name: "Chapter 1: Introduction",
        objective: "Learn the basics of web development.",
        position: 1,
        course_id: 5,
        content: [
          {
            course_content_id: 5,
            course_detail_id: 5,
            title: "Introduction to Web Development",
            course_content:
              "Web development is the work involved in developing a website for the Internet or an intranet.",
            sub_content: [
              {
                course_subcontent_id: 5,
                title: "Introduction",
                content: "This section introduces web development.",
                course_content_id: 5,
              },
            ],
            exercise: [
              {
                course_exercise_id: 5,
                title: "Exercise 1",
                content: "Create a simple web page.",
                course_content_id: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 6,
    name: "Cyber Security Basics",
    code: "CS201",
    category_id: 1,
    price: 140,
    description:
      "An introductory course on cyber security principles and practices.",
    media_id: "m6",
    is_paid: true,
    is_archived: false,
    author: "Daniel Evans",
    created_at: "2023-06-01T00:00:00Z",
    updated_at: "2023-06-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 1,
      name: "Computer Science",
      created_at: "2023-06-01T00:00:00Z",
      updated_at: "2023-06-01T00:00:00Z",
    },
    media: {
      media_id: "m6",
      name: "Cyber Security Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-06-01T00:00:00Z",
      updated_at: "2023-06-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 6,
        name: "Chapter 1: Basics",
        objective: "Understand the fundamentals of cyber security.",
        position: 1,
        course_id: 6,
        content: [
          {
            course_content_id: 6,
            course_detail_id: 6,
            title: "Introduction to Cyber Security",
            course_content:
              "Cyber security involves protecting systems, networks, and programs from digital attacks.",
            sub_content: [
              {
                course_subcontent_id: 6,
                title: "Introduction",
                content: "This section introduces cyber security.",
                course_content_id: 6,
              },
            ],
            exercise: [
              {
                course_exercise_id: 6,
                title: "Exercise 1",
                content: "Identify potential security threats.",
                course_content_id: 6,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 7,
    name: "Digital Marketing",
    code: "DM101",
    category_id: 3,
    price: 90,
    description:
      "Learn the fundamentals of digital marketing, including SEO and social media marketing.",
    media_id: "m7",
    is_paid: true,
    is_archived: false,
    author: "Eve Green",
    created_at: "2023-07-01T00:00:00Z",
    updated_at: "2023-07-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 3,
      name: "Marketing",
      created_at: "2023-07-01T00:00:00Z",
      updated_at: "2023-07-01T00:00:00Z",
    },
    media: {
      media_id: "m7",
      name: "Digital Marketing Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-07-01T00:00:00Z",
      updated_at: "2023-07-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 7,
        name: "Chapter 1: Basics",
        objective: "Understand the basics of digital marketing.",
        position: 1,
        course_id: 7,
        content: [
          {
            course_content_id: 7,
            course_detail_id: 7,
            title: "Introduction to Digital Marketing",
            course_content:
              "Digital marketing involves marketing to consumers through digital channels.",
            sub_content: [
              {
                course_subcontent_id: 7,
                title: "Introduction",
                content: "This section introduces digital marketing.",
                course_content_id: 7,
              },
            ],
            exercise: [
              {
                course_exercise_id: 7,
                title: "Exercise 1",
                content: "Create a digital marketing plan.",
                course_content_id: 7,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 8,
    name: "Graphic Design Basics",
    code: "GD101",
    category_id: 4,
    price: 100,
    description:
      "Learn the basics of graphic design, including typography, color theory, and layout.",
    media_id: "m8",
    is_paid: true,
    is_archived: false,
    author: "Fiona Harris",
    created_at: "2023-08-01T00:00:00Z",
    updated_at: "2023-08-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 4,
      name: "Design",
      created_at: "2023-08-01T00:00:00Z",
      updated_at: "2023-08-01T00:00:00Z",
    },
    media: {
      media_id: "m8",
      name: "Graphic Design Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-08-01T00:00:00Z",
      updated_at: "2023-08-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 8,
        name: "Chapter 1: Basics",
        objective: "Learn the fundamentals of graphic design.",
        position: 1,
        course_id: 8,
        content: [
          {
            course_content_id: 8,
            course_detail_id: 8,
            title: "Introduction to Graphic Design",
            course_content:
              "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content.",
            sub_content: [
              {
                course_subcontent_id: 8,
                title: "Introduction",
                content: "This section introduces graphic design.",
                course_content_id: 8,
              },
            ],
            exercise: [
              {
                course_exercise_id: 8,
                title: "Exercise 1",
                content: "Create a simple graphic design project.",
                course_content_id: 8,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 9,
    name: "Business Management",
    code: "BM101",
    category_id: 5,
    price: 160,
    description:
      "An introductory course on business management principles and practices.",
    media_id: "m9",
    is_paid: true,
    is_archived: false,
    author: "George Irving",
    created_at: "2023-09-01T00:00:00Z",
    updated_at: "2023-09-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 5,
      name: "Business",
      created_at: "2023-09-01T00:00:00Z",
      updated_at: "2023-09-01T00:00:00Z",
    },
    media: {
      media_id: "m9",
      name: "Business Management Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-09-01T00:00:00Z",
      updated_at: "2023-09-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 9,
        name: "Chapter 1: Basics",
        objective: "Learn the fundamentals of business management.",
        position: 1,
        course_id: 9,
        content: [
          {
            course_content_id: 9,
            course_detail_id: 9,
            title: "Introduction to Business Management",
            course_content:
              "Business management involves overseeing and supervising a company's activities and employees.",
            sub_content: [
              {
                course_subcontent_id: 9,
                title: "Introduction",
                content: "This section introduces business management.",
                course_content_id: 9,
              },
            ],
            exercise: [
              {
                course_exercise_id: 9,
                title: "Exercise 1",
                content: "Develop a basic business management plan.",
                course_content_id: 9,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    course_id: 10,
    name: "Project Management",
    code: "PM101",
    category_id: 5,
    price: 150,
    description:
      "Learn the fundamentals of project management, including planning, execution, and monitoring.",
    media_id: "m10",
    is_paid: true,
    is_archived: false,
    author: "Helen Johnson",
    created_at: "2023-10-01T00:00:00Z",
    updated_at: "2023-10-01T00:00:00Z",
    deleted_at: "null",
    category: {
      category_id: 5,
      name: "Business",
      created_at: "2023-10-01T00:00:00Z",
      updated_at: "2023-10-01T00:00:00Z",
    },
    media: {
      media_id: "m10",
      name: "Project Management Image",
      type: "image",
      url_media:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      created_at: "2023-10-01T00:00:00Z",
      updated_at: "2023-10-01T00:00:00Z",
    },
    course_detail: [
      {
        course_detail_id: 10,
        name: "Chapter 1: Basics",
        objective: "Understand the basics of project management.",
        position: 1,
        course_id: 10,
        content: [
          {
            course_content_id: 10,
            course_detail_id: 10,
            title: "Introduction to Project Management",
            course_content:
              "Project management involves planning, executing, and overseeing projects to achieve specific goals.",
            sub_content: [
              {
                course_subcontent_id: 10,
                title: "Introduction",
                content: "This section introduces project management.",
                course_content_id: 10,
              },
            ],
            exercise: [
              {
                course_exercise_id: 10,
                title: "Exercise 1",
                content: "Create a project plan.",
                course_content_id: 10,
              },
            ],
          },
        ],
      },
    ],
  },
];
