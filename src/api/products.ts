import type { CardOneObjectProps } from "@/components/type";
import MainOne from "@/assets/main-one_card.png";
import MainTwo from "@/assets/main-two_card.png";
import MainThree from "@/assets/main-three_card.png";
import MainFour from "@/assets/main-four_card.png";
import MainFife from "@/assets/main-fife_card.png";
import MainSix from "@/assets/main-six_card.png";
import icon_one from "@/assets/icon_one.png";
import icon_two from "@/assets/icon_two.png";
import icon_three from "@/assets/icon_three.png";

const PRODUCTS_API_URL = "https://69f87d1af7044aa0103def5b.mockapi.io/products";

type ApiProduct = {
  id: number | string;
  title: string;
  img: string;
  iconImages?: string[];
  currentPrice: string;
  originalPrice: string;
  rentalText: string;
  iconLabels: string[];
};

const imageMap: Record<string, string> = {
  MainOne,
  MainTwo,
  MainThree,
  MainFour,
  MainFife,
  MainSix,
};

const fallbackProducts: CardOneObjectProps[] = [
  {
    id: 0,
    title: "Велосипед - 26",
    img: MainOne,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "180 000 сум.",
    originalPrice: "400 000 сум.",
    rentalText: "Аренда 7 д.",
    iconLabels: ["Девять скоростей", "Удобное сиденье", "Механик тормоз"],
  },
  {
    id: 1,
    title: "Велосипед - 26A",
    img: MainTwo,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "200 000 сум.",
    originalPrice: "450 000 сум.",
    rentalText: "Аренда 7 д.",
    iconLabels: ["Мощная амортизация", "Удобное сиденье", "Механик тормоз"],
  },
  {
    id: 2,
    title: "Велосипед - 29",
    img: MainThree,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "220 000 сум.",
    originalPrice: "500 000 сум.",
    rentalText: "Аренда 7 д.",
    iconLabels: ["Девять скоростей", "Удобное сиденье", "Механик тормоз"],
  },
  {
    id: 3,
    title: "Электровелосипед - 18",
    img: MainFour,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "700 000 сум.",
    originalPrice: "1 200 000 сум.",
    rentalText: "Аренда 14 д.",
    iconLabels: ["40км/час", "до 6 часов 70 км", "Гидравл. тормоз"],
  },
  {
    id: 4,
    title: "Электровелосипед - 16",
    img: MainFife,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "750 000 сум.",
    originalPrice: "1 250 000 сум.",
    rentalText: "Аренда 14 д.",
    iconLabels: ["50км/час", "до 6 часов 75 км", "Гидравл. тормоз"],
  },
  {
    id: 5,
    title: "Запасная батарея - 60V...",
    img: MainSix,
    iconImgOne: icon_one,
    iconImgTwo: icon_two,
    iconImgThree: icon_three,
    currentPrice: "250 000 сум.",
    originalPrice: "500 000 сум.",
    rentalText: "Аренда 14 д.",
    iconLabels: ["Девять скоростей", "Удобное сиденье", "Механик тормоз"],
  },
];

const mapApiProduct = (product: ApiProduct): CardOneObjectProps => ({
  id: Number(product.id),
  title: product.title,
  img: imageMap[product.img] ?? product.img,
  iconImgOne: icon_one,
  iconImgTwo: icon_two,
  iconImgThree: icon_three,
  currentPrice: product.currentPrice,
  originalPrice: product.originalPrice,
  rentalText: product.rentalText,
  iconLabels: product.iconLabels,
});

export const fetchProducts = async (): Promise<CardOneObjectProps[]> => {
  try {
    const response = await fetch(PRODUCTS_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data = (await response.json()) as ApiProduct[];
    return data.map(mapApiProduct);
  } catch {
    return fallbackProducts;
  }
};
