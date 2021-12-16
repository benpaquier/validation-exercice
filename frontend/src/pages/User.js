import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState(null)
  const { slug } = useParams()
  
  useEffect(() => {
    fetch(`http://localhost:5000/users/${slug}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  if (!user) {
    return <p>Chargement...</p>
  }

  return (
    <div>
      <img src={user.profile_picture} />
      <h1>{user.name}</h1>
      <p>Password: {user.password}</p>
      <p>City: {user.city}</p>
    </div>
  )
}

export default User
