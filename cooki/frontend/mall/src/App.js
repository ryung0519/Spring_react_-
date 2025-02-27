import { RouterProvider } from "react-router-dom";
import root from "./rooter/root";

function App() {
  return (
    <RouterProvider router={root}/>
  );
}

export default App;
