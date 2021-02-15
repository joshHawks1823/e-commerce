import bcrypt from 'bcryptjs'

const users = [
  {
    name:'Admin User',
    email: 'admin@example',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name:'John Doe',
    email: 'john@example',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name:'Jane Doe',
    email: 'jane@example',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users