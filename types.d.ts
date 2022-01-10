export type Role = 'default'

export type User = {
  id: string
  email: string
  role: Role
  firstName: string
  lastName: string
  companyName: string
  image?: string
}
