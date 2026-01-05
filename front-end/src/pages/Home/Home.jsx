import { NavLink } from "react-router";
import { ROUTES } from '@/Routes'

export const Home = () => {
  return (
    <>
      <NavLink to={ROUTES.LOGIN}>
        Login
      </NavLink>
    </>
  );
}