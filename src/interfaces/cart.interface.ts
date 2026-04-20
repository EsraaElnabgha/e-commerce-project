export interface CartResponse {
  status: string
  numOfCartItems: number
  cartId: string
  data: CartData
}

export interface CartData {
  _id: string
  cartOwner: string
  products: CartProduct[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface CartProduct {
  count: number
  _id: string
  product: CartProductDetails
  price: number
}

export interface CartProductDetails {
  subcategory: { _id: string; name: string; slug: string; category: string }[]
  _id: string
  title: string
  quantity: number
  imageCover: string
  category: { _id: string; name: string; slug: string; image: string }
  brand: { _id: string; name: string; slug: string; image: string }
  ratingsAverage: number
  id: string
}
