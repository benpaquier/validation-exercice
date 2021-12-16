import styled from 'styled-components'

const Card = styled.div`
  width: 400px;
  border: solid 1px #333;
  margin: 20px;
`

const Img = styled.div`
  height: 300px;
  background-image: url('${props => props.background}');
  background-position: center;
  background-size: cover;
`

const UserCard = ({ image, name, city }) => {
  return (
    <Card>
      <Img background={image} />
      <h2>{name}</h2>
      <p>City: {city}</p>
    </Card>
  )
}

export default UserCard