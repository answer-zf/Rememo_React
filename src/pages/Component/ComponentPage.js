import HomePage from './HomePage'
import UserPage from './UserPage'

const ComponentPage = () => {
  return (
    <div>
      <h4>组件复合</h4>
      <UserPage />
      <div>---------</div>
      <HomePage />
    </div>
  )
}
export default ComponentPage
