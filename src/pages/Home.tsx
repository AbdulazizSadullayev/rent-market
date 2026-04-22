import Banner from "@/components/Banner"
import BannerInfo from "@/components/BannerInfo"
import Products from "@/components/Products"
import express from "@/assets/Express.png"
import bicycleGift from "@/assets/bicyclegift.png"
import ProductsTwo from "@/components/ProductsTwo"
import HowItWorks from "@/components/HowItWorks"
import LocationSection from "@/components/LocationSection"
import PartnersGrid from "@/components/PartnersGrid"
import FAQ from "@/components/FAQ"
import BlogSection from "@/components/BlogSection"
import { blogData } from "@/data"



const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Products title="Велосипеды" />
      <BannerInfo img={express} />
      <Products title="Спортивный тренажеры" />
      <BannerInfo img={bicycleGift} reverse />
      <ProductsTwo title="Гаджеты и другие" />
      <BannerInfo img={express} />
      <HowItWorks />
      <LocationSection />
      <PartnersGrid />
      <FAQ />
      <BlogSection data={blogData} />
    </div>
  )
}

export default Home

// bitib qolar