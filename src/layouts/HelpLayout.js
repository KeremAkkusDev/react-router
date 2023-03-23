import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Help Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem? Et fuga corporis rem laborum!</p>
        <nav>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="faq">FAQ</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
