import BannerRecomTwo from "../assets/BannerRecom-two.png"

const BannerRecom = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-3xl mt-9 px-6 py-8 md:px-12 md:py-10 w-full">
            
            {/* Matn qismi */}
            <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 md:mb-6">
                    Аренда девайсов по выгодным ценам
                </h2>
                <p className="text-base md:text-lg text-[#222222] font-normal mb-6">
                    без залогов и забот о ремонте
                </p>
                
                {/* Tugma: Har doim ko'rinadi, faqat dizayni ekranga qarab o'zgaradi */}
                <button className="hidden md:block w-fit text-white px-12 py-4 text-base font-bold bg-[#1F1F1F] rounded-[2.25rem] hover:bg-opacity-90 transition-all">
                    Смотреть каталог
                </button>
            </div>

            {/* Rasm qismi */}
            <div className="w-full md:w-1/2 flex justify-center items-center my-6 md:my-0">
                <img src={BannerRecomTwo} alt="Banner Recommendation" className="w-full h-auto max-w-[280px] md:max-w-[400px]"/>
            </div>

            {/* Mobil tugmasi: Faqat md (768px) dan kichik ekranlarda ko'rinadi */}
            <button className="md:hidden w-full text-white py-4 text-base font-bold bg-[#1F1F1F] rounded-[1.25rem]">
                Смотреть каталог
            </button>
            
        </div>
    )
}

export default BannerRecom