import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import UserCard from '../components/UserCard'

const Home = () => {
  const [users, setUsers] = useState([])

  // quand mon component se monte,
  // je fais le fetch pour recuperer
  // tous les users
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      {users.map(user => (
        <Link to={`/users/${user.slug}`}>
          <UserCard
            image={user.profile_picture}
            name={user.name}
            city={user.city}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home