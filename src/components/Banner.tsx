import BannerRecom from "./BannerRecom"
import BannerTwo from "./banner-two"

const Banner = () => {
    return (
        <section>
            <div className="container">
                <BannerRecom />
                <BannerTwo />
            </div>
        </section>
    )
}

export default Banner