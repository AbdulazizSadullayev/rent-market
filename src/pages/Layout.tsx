import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F1F1F]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-3 sm:px-4 md:px-6">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </div>
  )
}

export default Layout