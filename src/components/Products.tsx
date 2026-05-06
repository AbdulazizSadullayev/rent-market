import ProductCard from "./ProductCard"
import { useProducts } from "@/hooks/useProducts"

const Products = (props: { title: string }) => {

    const { title  } = props
    const { products, loading } = useProducts()

    return (
        <section className="pt-8 sm:pt-10">
            <h2 className="text-2xl font-bold text-[#222222] sm:text-3xl md:text-4xl">{title}</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
                {
                    (loading ? [] : products).map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))
                }
            </div>
        </section>
    )
}

export default Products