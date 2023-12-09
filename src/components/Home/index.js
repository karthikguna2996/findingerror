import {Link} from 'react-router-dom'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <Link to="/">
    <div className="home-container">
      <UserInfo />
      <BlogList />
    </div>
  </Link>
)

export default Home
