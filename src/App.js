import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
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
      <RouterProvider router={Router}/>
    </Provider>
  );
}

export default App;
