import express from 'express'

import { User } from '@models/User'

const app = express()

app.get('/', (request, response) => {
  const user = new User()

  return response.json({ message: 'Hello World!!!' })
})

app.listen(3333)
