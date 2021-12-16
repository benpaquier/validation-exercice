const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const port = 5000

// importer mes routes users
const usersRoutes = require("./routes/users")

// ca me permet d'autoriser mon app react a communiquer
// avec le backend/api
app.use(cors())

// ca me permet de log mes requetes sur mon serveur
app.use(morgan("tiny"))

// ca me permet de lire le contenu de mes requetes (body)
app.use(express.json())

// utilisation des routes users
// avec le préfixe `/users`
app.use('/users', usersRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})