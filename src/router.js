import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { IndexLoader, ShowLoader } from "./loaders";
import { CreateAction, UpdateAction, DeleteAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={IndexLoader} />
        <Route path="post/:id" element={<Show />} loader={ShowLoader} />
        <Route path="create" action={CreateAction} />
        <Route path="update/:id" action={UpdateAction} />
        <Route path="delete/:id" action={DeleteAction} />
      </Route>
    </>
  )
);

export default router;
