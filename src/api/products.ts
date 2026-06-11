import { api } from "./client"

export const createCheckout = async (productId: number) => {
  const res = await api.post("/payment/create-checkout", {
    productId,
  })

  return res.data.url
}

export const downloadPlugin = async (productId: number) => {
  const res = await api.get(`/download/${productId}`, {
    responseType: "blob",
  })

  return res.data
}


// get all products.
export const getProducts = async () => {
  const res = await api.get("/products")
  return res.data
}

// get owned product.
export const getMyProductIds = async () => {
  const res = await api.get("/products/my")
  return res.data // number[]
}