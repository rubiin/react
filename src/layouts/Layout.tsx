import { Header } from "@components"
import { Outlet, useLocation } from "react-router-dom"
import "@scss/App.scss"

export const Layout = () => {
  const location = useLocation()
  const dynamicPadding = {padding: location.pathname === '/' ? '0 4rem' : '0'}
  return (
    <div style={dynamicPadding}>
      <Header />
      <Outlet/>
    </div>
  )
}

