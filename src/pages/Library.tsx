import { useEffect, useState } from "react"
import {
  getProducts,
  getMyProductIds,
  downloadPlugin,
} from "../api/products"

export default function Library() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [allProducts, owned] = await Promise.all([
          getProducts(),
          getMyProductIds(),
        ])

        const ownedProducts = allProducts.filter((p: any) =>
          owned.includes(p.id)
        )

        setProducts(ownedProducts)
      } catch (err) {
        console.error("Library load error:", err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

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
      alert("Failed to download")
    }
  }

  if (loading) {
    return (
      <div className="home">
        <div className="library-state">
          <h2>My Plugins</h2>
          <p>Loading your library...</p>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="home">
        <div className="library-state">
          <h2>My Plugins</h2>
          <p>You don't own any plugins yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="library-header">
        <h2>My Plugins</h2>
        <p>All plugins included in your account</p>
      </div>

      <div className="library-list">
        {products.map((p) => (
          <div className="library-item" key={p.id}>
            <div className="library-info">
              <h3>{p.name}</h3>
              <p>{p.description ?? "No description available."}</p>
            </div>

            <div className="library-actions">
              <button onClick={() => handleDownload(p.id, p.name)}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}