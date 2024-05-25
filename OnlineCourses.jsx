import React, { useState } from "react";
import "./courses.css";
import Heading from "../common/heading/Heading";
import Enroll from "./Enroll";
import CourseContent from "./CourseContent";

const OnlineCourses = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewingContent, setViewingContent] = useState(false);

  const courses = [
    {
      title: "C++ Programming Language",
      image: "/images/courses/C++.png",
      tutor: "Dr. John Doe",
      duration: "10 weeks",
      syllabus: [
        "Introduction to C++",
        "Variables and Data Types",
        "Control Structures",
        "Functions and Arrays",
        "Object-Oriented Programming",
        "Advanced Topics"
      ],
      modules: [
        {
          title: "Introduction to C++",
          video: "https://www.youtube.com/embed/j8nAHeVKL08",
          notes: "Introduction to the C++ programming language and its features."
        },
        {
          title: "Variables and Data Types",
          video: "https://www.youtube.com/embed/jigb6W35zHc",
          notes: "Learn about variables and data types in C++."
        },
        {
          title: "Control Structures",
          video: "https://www.youtube.com/embed/AY96XFqb934",
          notes: "Understanding control structures in C++."
        },
        {
          title: "Functions and Arrays",
          video: "https://www.youtube.com/embed/RFLFX1boGwo",
          notes: "Learn about functions and arrays in C++."
        },
        {
          title: "Object-Oriented Programming",
          video: "https://www.youtube.com/embed/nGJTWaaFdjc",
          notes: "Introduction to Object-Oriented Programming in C++."
        },
        {
          title: "Advanced Topics",
          video: "https://www.youtube.com/embed/MpGw4iDN14Y",
          notes: "Explore advanced topics in C++ programming."
        }
      ]
    },
    {
      title: "C Programming",
      image: "/images/courses/C.png",
      tutor: "Jane Smith",
      duration: "8 weeks",
      syllabus: [
        "Introduction to C",
        "Basic Syntax and Operators",
        "Control Flow",
        "Functions and Pointers",
        "Structures and Unions",
        "File Handling"
      ],
      modules: [
        {
          title: "Introduction to C",
          video: "https://www.youtube.com/embed/kJzeV1ux8MU",
          notes: "Introduction to the C programming language and its features."
        },
        {
          title: "Basic Syntax and Operators",
          video: "https://www.youtube.com/embed/vid3",
          notes: "Learn about basic syntax and operators in C."
        },
        {
          title: "Control Flow",
          video: "https://www.youtube.com/embed/vid4",
          notes: "Understanding control flow in C."
        },
        {
          title: "Functions and Pointers",
          video: "https://www.youtube.com/embed/vid5",
          notes: "Learn about functions and pointers in C."
        },
        {
          title: "Structures and Unions",
          video: "https://www.youtube.com/embed/vid6",
          notes: "Introduction to structures and unions in C."
        },
        {
          title: "File Handling",
          video: "https://www.youtube.com/embed/vid7",
          notes: "Learn about file handling in C."
        }
      ]
    },
    {
      title: "Cascading Style Sheets",
      image: "/images/courses/CSS.png",
      tutor: "Dr. Alice Johnson",
      duration: "6 weeks",
      syllabus: [
        "Introduction to CSS",
        "Selectors and Properties",
        "Box Model",
        "Flexbox and Grid",
        "Responsive Design",
        "Animations and Transitions"
      ],
      modules: [
        {
          title: "Introduction to CSS",
          video: "https://www.youtube.com/embed/vid8",
          notes: "Introduction to CSS and its features."
        },
        {
          title: "Selectors and Properties",
          video: "https://www.youtube.com/embed/vid9",
          notes: "Learn about selectors and properties in CSS."
        },
        {
          title: "Box Model",
          video: "https://www.youtube.com/embed/vid10",
          notes: "Understanding the box model in CSS."
        },
        {
          title: "Flexbox and Grid",
          video: "https://www.youtube.com/embed/vid11",
          notes: "Learn about Flexbox and Grid in CSS."
        },
        {
          title: "Responsive Design",
          video: "https://www.youtube.com/embed/vid12",
          notes: "Introduction to responsive design in CSS."
        },
        {
          title: "Animations and Transitions",
          video: "https://www.youtube.com/embed/vid13",
          notes: "Learn about animations and transitions in CSS."
        }
      ]
    },
    {
      title: "DSA with C++",
      image: "/images/courses/DSA C++.png",
      tutor: "Bob Brown",
      duration: "12 weeks",
      syllabus: [
        "Introduction to DSA",
        "Arrays and Strings",
        "Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Sorting and Searching Algorithms"
      ],
      modules: [
        {
          title: "Introduction to DSA",
          video: "https://www.youtube.com/embed/vid14",
          notes: "Introduction to Data Structures and Algorithms (DSA)."
        },
        {
          title: "Arrays and Strings",
          video: "https://www.youtube.com/embed/vid15",
          notes: "Learn about arrays and strings in DSA."
        },
        {
          title: "Linked Lists",
          video: "https://www.youtube.com/embed/vid16",
          notes: "Understanding linked lists in DSA."
        },
        {
          title: "Stacks and Queues",
          video: "https://www.youtube.com/embed/vid17",
          notes: "Learn about stacks and queues in DSA."
        },
        {
          title: "Trees and Graphs",
          video: "https://www.youtube.com/embed/vid18",
          notes: "Introduction to trees and graphs in DSA."
        },
        {
          title: "Sorting and Searching Algorithms",
          video: "https://www.youtube.com/embed/vid19",
          notes: "Learn about sorting and searching algorithms in DSA."
        }
      ]
    },
    {
      title: "Hypertext Markup Language",
      image: "/images/courses/HTML.png",
      tutor: "Eva Davis",
      duration: "4 weeks",
      syllabus: [
        "Introduction to HTML",
        "Basic Tags and Attributes",
        "Forms and Tables",
        "Semantic HTML",
        "Multimedia Elements",
        "HTML5 Features"
      ],
      modules: [
        {
          title: "Introduction to HTML",
          video: "https://www.youtube.com/embed/vid20",
          notes: "Introduction to HTML and its features."
        },
        {
          title: "Basic Tags and Attributes",
          video: "https://www.youtube.com/embed/vid21",
          notes: "Learn about basic tags and attributes in HTML."
        },
        {
          title: "Forms and Tables",
          video: "https://www.youtube.com/embed/vid22",
          notes: "Understanding forms and tables in HTML."
        },
        {
          title: "Semantic HTML",
          video: "https://www.youtube.com/embed/vid23",
          notes: "Learn about semantic HTML."
        },
        {
          title: "Multimedia Elements",
          video: "https://www.youtube.com/embed/vid24",
          notes: "Introduction to multimedia elements in HTML."
        },
        {
          title: "HTML5 Features",
          video: "https://www.youtube.com/embed/vid25",
          notes: "Explore HTML5 features."
        }
      ]
    },
    {
      title: "Java Programming Basics",
      image: "/images/courses/Java.png",
      tutor: "Michael Wilson",
      duration: "10 weeks",
      syllabus: [
        "Introduction to Java",
        "Basic Syntax and Data Types",
        "Control Flow Statements",
        "OOP Concepts",
        "Exception Handling",
        "File I/O and Collections"
      ],
      modules: [
        {
          title: "Introduction to Java",
          video: "https://www.youtube.com/embed/vid26",
          notes: "Introduction to Java programming language and its features."
        },
        {
          title: "Basic Syntax and Data Types",
          video: "https://www.youtube.com/embed/vid27",
          notes: "Learn about basic syntax and data types in Java."
        },
        {
          title: "Control Flow Statements",
          video: "https://www.youtube.com/embed/vid28",
          notes: "Understanding control flow statements in Java."
        },
        {
          title: "OOP Concepts",
          video: "https://www.youtube.com/embed/vid29",
          notes: "Learn about OOP concepts in Java."
        },
        {
          title: "Exception Handling",
          video: "https://www.youtube.com/embed/vid30",
          notes: "Introduction to exception handling in Java."
        },
        {
          title: "File I/O and Collections",
          video: "https://www.youtube.com/embed/vid31",
          notes: "Learn about file I/O and collections in Java."
        }
      ]
    },
    {
      title: "JavaScript Programming",
      image: "/images/courses/JS.jpg",
      tutor: "Dr. Sarah Martinez",
      duration: "8 weeks",
      syllabus: [
        "Introduction to JavaScript",
        "Variables and Data Types",
        "Functions and Scope",
        "DOM Manipulation",
        "Events and Event Handling",
        "Async JavaScript"
      ],
      modules: [
        {
          title: "Introduction to JavaScript",
          video: "https://www.youtube.com/embed/vid32",
          notes: "Introduction to JavaScript programming language and its features."
        },
        {
          title: "Variables and Data Types",
          video: "https://www.youtube.com/embed/vid33",
          notes: "Learn about variables and data types in JavaScript."
        },
        {
          title: "Functions and Scope",
          video: "https://www.youtube.com/embed/vid34",
          notes: "Understanding functions and scope in JavaScript."
        },
        {
          title: "DOM Manipulation",
          video: "https://www.youtube.com/embed/vid35",
          notes: "Learn about DOM manipulation in JavaScript."
        },
        {
          title: "Events and Event Handling",
          video: "https://www.youtube.com/embed/vid36",
          notes: "Introduction to events and event handling in JavaScript."
        },
        {
          title: "Async JavaScript",
          video: "https://www.youtube.com/embed/vid37",
          notes: "Explore async JavaScript and its features."
        }
      ]
    },
    {
      title: "MongoDB Database Management",
      image: "/images/courses/Mongo.png",
      tutor: "Dr. David Thompson",
      duration: "6 weeks",
      syllabus: [
        "Introduction to MongoDB",
        "CRUD Operations",
        "Indexing and Aggregation",
        "Replication and Sharding",
        "Security and Backup",
        "Performance Tuning"
      ],
      modules: [
        {
          title: "Introduction to MongoDB",
          video: "https://www.youtube.com/embed/vid38",
          notes: "Introduction to MongoDB and its features."
        },
        {
          title: "CRUD Operations",
          video: "https://www.youtube.com/embed/vid39",
          notes: "Learn about CRUD operations in MongoDB."
        },
        {
          title: "Indexing and Aggregation",
          video: "https://www.youtube.com/embed/vid40",
          notes: "Understanding indexing and aggregation in MongoDB."
        },
        {
          title: "Replication and Sharding",
          video: "https://www.youtube.com/embed/vid41",
          notes: "Learn about replication and sharding in MongoDB."
        },
        {
          title: "Security and Backup",
          video: "https://www.youtube.com/embed/vid42",
          notes: "Introduction to security and backup in MongoDB."
        },
        {
          title: "Performance Tuning",
          video: "https://www.youtube.com/embed/vid43",
          notes: "Explore performance tuning in MongoDB."
        }
      ]
    },
    {
      title: "Python Programming",
      image: "/images/courses/Python.png",
      tutor: "Olivia White",
      duration: "8 weeks",
      syllabus: [
        "Introduction to Python",
        "Basic Syntax and Data Types",
        "Control Flow Statements",
        "Functions and Modules",
        "File I/O",
        "OOP Concepts in Python"
      ],
      modules: [
        {
          title: "Introduction to Python",
          video: "https://www.youtube.com/embed/vid44",
          notes: "Introduction to Python programming language and its features."
        },
        {
          title: "Basic Syntax and Data Types",
          video: "https://www.youtube.com/embed/vid45",
          notes: "Learn about basic syntax and data types in Python."
        },
        {
          title: "Control Flow Statements",
          video: "https://www.youtube.com/embed/vid46",
          notes: "Understanding control flow statements in Python."
        },
        {
          title: "Functions and Modules",
          video: "https://www.youtube.com/embed/vid47",
          notes: "Learn about functions and modules in Python."
        },
        {
          title: "File I/O",
          video: "https://www.youtube.com/embed/vid48",
          notes: "Introduction to file I/O in Python."
        },
        {
          title: "OOP Concepts in Python",
          video: "https://www.youtube.com/embed/vid49",
          notes: "Explore OOP concepts in Python."
        }
      ]
    },
    {
      title: "React.js Web Development",
      image: "/images/courses/React.png",
      tutor: "Dr. Robert Lee",
      duration: "8 weeks",
      syllabus: [
        "Introduction to React",
        "Components and Props",
        "State and Lifecycle",
        "Event Handling",
        "Conditional Rendering",
        "Hooks and Context API"
      ],
      modules: [
        {
          title: "Introduction to React",
          video: "https://www.youtube.com/embed/vid50",
          notes: "Introduction to React and its features."
        },
        {
          title: "Components and Props",
          video: "https://www.youtube.com/embed/vid51",
          notes: "Learn about components and props in React."
        },
        {
          title: "State and Lifecycle",
          video: "https://www.youtube.com/embed/vid52",
          notes: "Understanding state and lifecycle in React."
        },
        {
          title: "Event Handling",
          video: "https://www.youtube.com/embed/vid53",
          notes: "Learn about event handling in React."
        },
        {
          title: "Conditional Rendering",
          video: "https://www.youtube.com/embed/vid54",
          notes: "Introduction to conditional rendering in React."
        },
        {
          title: "Hooks and Context API",
          video: "https://www.youtube.com/embed/vid55",
          notes: "Explore hooks and context API in React."
        }
      ]
    },
    {
      title: "Structured Query Language",
      image: "/images/courses/SQL.jpg",
      tutor: "Emily Moore",
      duration: "6 weeks",
      syllabus: [
        "Introduction to SQL",
        "Basic Queries",
        "Joins and Subqueries",
        "Data Manipulation",
        "Data Definition",
        "Indexing and Optimization"
      ],
      modules: [
        {
          title: "Introduction to SQL",
          video: "https://www.youtube.com/embed/vid56",
          notes: "Introduction to SQL and its features."
        },
        {
          title: "Basic Queries",
          video: "https://www.youtube.com/embed/vid57",
          notes: "Learn about basic queries in SQL."
        },
        {
          title: "Joins and Subqueries",
          video: "https://www.youtube.com/embed/vid58",
          notes: "Understanding joins and subqueries in SQL."
        },
        {
          title: "Data Manipulation",
          video: "https://www.youtube.com/embed/vid59",
          notes: "Learn about data manipulation in SQL."
        },
        {
          title: "Data Definition",
          video: "https://www.youtube.com/embed/vid60",
          notes: "Introduction to data definition in SQL."
        },
        {
          title: "Indexing and Optimization",
          video: "https://www.youtube.com/embed/vid61",
          notes: "Explore indexing and optimization in SQL."
        }
      ]
    },
    {
      title: "Web Development",
      image: "/images/courses/WD.jpeg",
      tutor: "Dr. Daniel Harris",
      duration: "12 weeks",
      syllabus: [
        "Introduction to Web Development",
        "HTML and CSS Basics",
        "JavaScript Programming",
        "Responsive Design",
        "Backend Development",
        "Full-Stack Project"
      ],
      modules: [
        {
          title: "Introduction to Web Development",
          video: "https://www.youtube.com/embed/vid62",
          notes: "Introduction to web development and its features."
        },
        {
          title: "HTML and CSS Basics",
          video: "https://www.youtube.com/embed/vid63",
          notes: "Learn about HTML and CSS basics."
        },
        {
          title: "JavaScript Programming",
          video: "https://www.youtube.com/embed/vid64",
          notes: "Understanding JavaScript programming for web development."
        },
        {
          title: "Responsive Design",
          video: "https://www.youtube.com/embed/vid65",
          notes: "Learn about responsive design."
        },
        {
          title: "Backend Development",
          video: "https://www.youtube.com/embed/vid66",
          notes: "Introduction to backend development."
        },
        {
          title: "Full-Stack Project",
          video: "https://www.youtube.com/embed/vid67",
          notes: "Complete a full-stack web development project."
        }
      ]
    }
  ];


  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
    setViewingContent(false);
  };

  const handleStartCourse = () => {
    setViewingContent(true);
  };

  return ( 
    <>
      {selectedCourse ? (
        viewingContent ? (
          <CourseContent course={selectedCourse} onBack={handleBack} />
        ) : (
          <Enroll course={selectedCourse} onBack={handleBack} onStartCourse={handleStartCourse} />
        )
      ) : (
        <section className="online">
          <div className="container">
            <Heading subtitle="COURSES" title="Explore Our Courses" />
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search courses..."
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="search-btn" onClick={handleSearch}>
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="content grid3">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <h1>{course.title}</h1>
                    <div className="tutor-price-container">
                      <p className="tutor">{course.tutor}</p>
                    </div>
                    <button onClick={() => handleEnrollClick(course)}>Enroll Now</button>
                  </div>
                ))
              ) : (
                courses.map((course, index) => (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <h1>{course.title}</h1>
                    <div className="tutor-price-container">
                      <p className="tutor">{course.tutor}</p>
                    </div>
                    <button onClick={() => handleEnrollClick(course)} className="enroll">Enroll Now</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OnlineCourses;