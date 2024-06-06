import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import Login_form from "./Login_form";
import Profile from "./Profile";

let Body = () => {
   
  let approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login_form />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path:"/contactme",
      element:<Profile/>
    }
  ]);

  

  return (
    <div>
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
};

export default Body;
