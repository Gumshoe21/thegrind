export type ReactChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void
export type childrenProp = JSX.Element | JSX.Element[] | React.ReactNode[]
export type Address = {
  label: string
  firstName: string
  lastName: string
  street: string
  unit: string
  city: string
  country: string
  state: string
  zipCode: string
  phone: string
}

export type AddressWithoutLabel = {
  firstName: string
  lastName: string
  street: string
  unit: string
  city: string
  country: string
  state: string
  zipCode: string
  phone: string
}
export type CreditCard = {
  label: string
  cardNumber: string
  nameOnCC: string
  expData: string
  cvc: string
}
export type CreditCardWithoutLabel = {
  cardNumber: string
  nameOnCC: string
  expData: string
  cvc: string
}
