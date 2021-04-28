import BotBar from './BotBar'
import TopBar from './TopBar'

const Layout = props => {
  const { children, topBar, botBar } = props
  return (
    <div>
      {topBar && <TopBar />}
      {children.content}
      {botBar && <BotBar />}
    </div>
  )
}

export default Layout
