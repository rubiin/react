import { Header } from "@components"

const MainLayout = (props: any) => {
  return (
    <div className='app'>
      <Header />
      {props.children}
    </div>
  )
}

export default MainLayout
