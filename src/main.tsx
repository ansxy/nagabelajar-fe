import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
import { BaseLayout } from "./layouts/BaseLayout.tsx";
import { CertificatePage } from "./pages/CertificatePage.tsx";
import { CourseDetailPage } from "./pages/CourseDetailPage.tsx";
import { CoursePage } from "./pages/CoursePage.tsx";
import { CoursesPage } from "./pages/CoursesPage.tsx";
import { Dashboard } from "./pages/DashboardPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { SandBox } from "./pages/SandboxPage";
import { CertificateLoader } from "./service/certificateService.ts";
import {
  CourseLoader,
  GetCourseDetailLoader,
  GetOneCourseLoader,
} from "./service/courseService.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,

        element: <Dashboard />,
      },
      {
        path: "/sandbox",
        element: <SandBox />,
      },
      {
        path: "/certificate",
        element: <CertificatePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        loader: CertificateLoader,
      },
      {
        path: "/course",
        children: [
          {
            path: "/course",
            index: true,
            element: <CoursesPage />,
            loader: CourseLoader,
          },
          {
            path: "/course/:id",
            children: [
              {
                path: "/course/:id",
                index: true,
                element: <CoursePage />,
                loader: ({ params, request }) => {
                  return GetOneCourseLoader({ params, request });
                },
              },
              {
                path: "/course/:id/:contentId",
                element: <CourseDetailPage />,
                loader: ({ params, request }) => {
                  return GetCourseDetailLoader({ params, request });
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    element: <h1>Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
