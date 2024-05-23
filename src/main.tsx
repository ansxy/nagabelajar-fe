import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
import { BaseLayout } from "./layouts/BaseLayout.tsx";
import { CoursesPage } from "./pages/CoursesPage.tsx";
import { Dashboard } from "./pages/DashboardPage.tsx";
import { SandBox } from "./pages/SandboxPage";

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
        path: "/course",
        children: [
          {
            path: "/course",
            index: true,
            element: <CoursesPage />,
          },
          {
            path: "/course/:id",
            element: <h1>Course Details</h1>,
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
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
