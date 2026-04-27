import { ShoppingBag, Heart, User } from "lucide-react"
import MainOne from "../assets/main-one_card.png"
import MainTwo from "../assets/main-two_card.png"
import MainThree from "../assets/main-three_card.png"
import MainFour from "../assets/main-four_card.png"
import MainFife from "../assets/main-fife_card.png"
import MainSix from "../assets/main-six_card.png"
import icon_one from "../assets/icon_one.png"
import icon_two from "../assets/icon_two.png"
import icon_three from "../assets/icon_three.png"
import partnerOne from '../assets/partner-1.png'
import partnerTwo from '../assets/partner-2.png'
import partnerThree from '../assets/partner-3.png'
import partnerFour from '../assets/partner-4.png'
import partnerFife from '../assets/partner-5.png'
import partnerSix from '../assets/partner-6.png'
import partnerSeven from '../assets/partner-7.png'
import partnerEight from '../assets/partner-8.png'
import FooterCardOne from '../assets/footer_cadr-one.png'
import FooterCardTwo from '../assets/footer_card-two.png'
import FooterCardThree from '../assets/footer_card-three.png'


export const headerLinks = [
    {
        id: 0,
        text: "Как оформить",
        to: "/howtoapply",
    },
    {
        id: 1,
        text: "Каталог",
        to: "/catalog",
    },
    {
        id: 2,
        text: "О компании",
        to: "/aboutthecompany",
    },
    {
        id: 3,
        text: "Для бизнеса",
        to: "/forbusiness",
    },
]

export const headerIcons = [
    {
        id: 0,
        icon: ShoppingBag,
    },
    {
        id: 1,
        icon: Heart,
    },
    {
        id: 2,
        icon: User,
    },
]

export const CardOneObject = [
    {
        id: 0,
        title: 'Велосипед - 26',
        img: MainOne,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '180 000 сум.',
        originalPrice: '400 000 сум.',
        rentalText: 'Аренда 7 д.',
        iconLabels: ['Девять скоростей', 'Удобное сиденье', 'Механик тормоз'],
    },
    {
        id: 1,
        title: 'Велосипед - 26A',
        img: MainTwo,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '200 000 сум.',
        originalPrice: '450 000 сум.',
        rentalText: 'Аренда 7 д.',
        iconLabels: ['Мощная амортизация', 'Удобное сиденье', 'Механик тормоз'],
    },
    {
        id: 2,
        title: 'Велосипед - 29',
        img: MainThree,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '220 000 сум.',
        originalPrice: '500 000 сум.',
        rentalText: 'Аренда 7 д.',
        iconLabels: ['Девять скоростей', 'Удобное сиденье', 'Механик тормоз'],
    },
    {
        id: 3,
        title: 'Электровелосипед - 18',
        img: MainFour,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '700 000 сум.',
        originalPrice: '1 200 000 сум.',
        rentalText: 'Аренда 14 д.',
        iconLabels: ['40км/час', 'до 6 часов 70 км', 'Гидравл. тормоз'],
    },
    {
        id: 4,
        title: 'Электровелосипед - 16',
        img: MainFife,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '750 000 сум.',
        originalPrice: '1 250 000 сум.',
        rentalText: 'Аренда 14 д.',
        iconLabels: ['50км/час', 'до 6 часов 75 км', 'Гидравл. тормоз'],
    },
    {
        id: 5,
        title: 'Запасная батарея - 60V...',
        img: MainSix,
        iconImgOne: icon_one,
        iconImgTwo: icon_two,
        iconImgThree: icon_three,
        currentPrice: '250 000 сум.',
        originalPrice: '500 000 сум.',
        rentalText: 'Аренда 14 д.',
        iconLabels: ['Девять скоростей', 'Удобное сиденье', 'Механик тормоз'],
    },
]


export const cardThree = [
    { id: 1, imageSource: partnerOne },
    { id: 2, imageSource: partnerTwo },
    { id: 3, imageSource: partnerThree },
    { id: 4, imageSource: partnerFour },
    { id: 5, imageSource: partnerFife },
    { id: 6, imageSource: partnerSix },
    { id: 7, imageSource: partnerSeven},
    { id: 8, imageSource: partnerEight },
]

export type FaqItem = {
  id: number
  category: string
  question: string
  answer: string
}

export const faqData: FaqItem[] = [
  { id: 1, category: 'Аренда', question: 'Как оформить аренду?', answer: 'Выберите устройство, заполните форму и дождитесь подтверждения.' },
  { id: 2, category: 'Аренда', question: 'Какие нужны документы?', answer: 'Нужен паспорт и контактный телефон. Иногда требуется залог.' },
  { id: 3, category: 'Оборудование', question: 'Какой срок гарантии?', answer: 'Гарантия зависит от устройства; детали указаны в карточке товара.' },
  { id: 4, category: 'Доставка', question: 'Сколько занимает доставка?', answer: 'Доставка обычно в пределах дня-двух в городе, зависит от загруженности.' },
  { id: 5, category: 'Покупка', question: 'Можно ли сразу купить устройство?', answer: 'Да, некоторые устройства доступны к покупке вместо аренды.' },
  { id: 6, category: 'Рассрочка', question: 'Как оформить рассрочку?', answer: 'Рассрочка оформляется через партнёров при подтверждении платежеспособности.' },
]

export type BlogPost = {
  id: number
  date: string
  readingTime: string
  title: string
  imageUrl: string
  link: string
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    date: '5 Июля 2024',
    readingTime: '4 мин',
    title: 'Как выбрать идеальный велосипед для города',
    imageUrl: FooterCardOne,
    link: '#',
  },
  {
    id: 2,
    date: '20 Июня 2024',
    readingTime: '6 мин',
    title: 'Уход за электровелосипедом: советы и трюки',
    imageUrl: FooterCardTwo,
    link: '#',
  },
  {
    id: 3,
    date: '1 Мая 2024',
    readingTime: '5 мин',
    title: 'Преимущества аренды vs покупки техники',
    imageUrl: FooterCardThree,
    link: '#',
  },
]

