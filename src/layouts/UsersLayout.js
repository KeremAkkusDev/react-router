import { Outlet } from "react-router-dom"

export const UsersLayout = () => {
  return (
    <div className="users-layout">
        <h2>Users Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem? Et fuga corporis rem laborum!</p>
        <Outlet/>
    </div>
  )
}
