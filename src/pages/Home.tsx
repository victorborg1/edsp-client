import { useState, useEffect } from "react"
import {
  getProducts,
  getMyProductIds,
  createCheckout,
  downloadPlugin,
} from "../api/products"

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [ownedIds, setOwnedIds] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Products error:", err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    getMyProductIds()
      .then(setOwnedIds)
      .catch(() => {})
  }, [])

  const handleBuy = async (productId: number) => {
    try {
      const url = await createCheckout(productId)
      window.location.href = url
    } catch (err) {
      console.error(err)
      alert("Failed to start checkout")
    }
  }

  const handleDownload = async (productId: number, productName: string) => {
    try {
      const blob = await downloadPlugin(productId)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${productName.replace(/[^a-z0-9]/gi, "_")}.zip`
      a.click()
      a.remove()
    } catch (err) {
      console.error(err)
      alert("You probably don't own this product yet")
    }
  }

  if (loading) {
    return (
      <div className="home">
        <div className="section center">
          <h2>Loading plugins...</h2>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="home">
        <div className="section center">
          <h2>No plugins available</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="plugin-grid">
        {products.map((p) => {
          const owned = ownedIds.includes(p.id)

          return (
            <div className="plugin-card" key={p.id}>
              <div className="plugin-image-container">
                <img
                  src="/granulator.png"
                  alt={p.name}
                  className="plugin-image"
                />
              </div>

              <div className="plugin-content">
                <h3>{p.name}</h3>
                <p>{p.description ?? "No description available."}</p>

                <div className="hero-actions">
                  <button onClick={() => handleBuy(p.id)} disabled={owned}>
                    {owned ? "Owned" : "Buy"}
                  </button>

                  {owned && (
                    <button onClick={() => handleDownload(p.id, p.name)}>
                      Download
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}