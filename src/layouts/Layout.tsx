import { Header } from "@components"
import { Outlet, useLocation } from "react-router-dom"
import "@scss/App.scss"

export const Layout = () => {
  const location = useLocation()
  const style = {
    maxWidth: "1200px",
    margin: "0 auto"
  };
  const dynamicPadding = location.pathname === '/' ?  style : {width: "100%"}
  return (
    <div style={dynamicPadding}>
      <Header />
      <Outlet/>
    </div>
  )
}

