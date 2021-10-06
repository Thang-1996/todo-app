import Home from "./features/home/Home";
import Login from "./features/login/Login";
import Register from "./features/register/Register";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
];
export default routes;
