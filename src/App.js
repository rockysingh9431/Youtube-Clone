import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import VideoContainer from "./components/VideoContainer";
import SearchVideoContainer from "./components/SearchVideoContainer";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
        children: [
          {
            path: "results",
            element: <SearchVideoContainer />,
          },
          {
            path: "/",
            element: <VideoContainer />,
          },
        ],
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
