import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Events } from "./components/pages/Events";
import { Members } from "./components/pages/Members";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "events", Component: Events },
      { path: "members", Component: Members },
      { path: "contact", Component: Contact },
    ],
  },
]);