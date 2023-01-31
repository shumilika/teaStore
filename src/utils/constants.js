import black_tea from '../images/black-tea.jpg';
import earl_grey_tea from '../images/earl-grey-tea.jpg';
import green_tea from '../images/green-tea.jpg';
import jasmine_tea from '../images/jasmine_tea.png';
import oolong_tea from '../images/oolong-tea.jpg';
import rooibos_tea from '../images/rooibos-tea.png';
import white_tea from '../images/white-tea.png';

export const homePage = '/';
export const cataloguePage = 'catalogue';
export const contactUsPage = 'contactUs';
export const favoritesPage = 'favorites';
export const cartPage = 'cart';

export const goods = {

    simpleBlack: {
        title: "Black tea",
        img: black_tea,
        type: "black tea",
        price: 115,
        favorites: false,
        discription: ""

    }, 

    earlGrey: {
        title: "Earl Grey tea",
        img: earl_grey_tea,
        type: "black tea",
        price: 117,
        favorites: false,
        discription: ""

    },

    green: {
        title: "Green tea",
        img: green_tea,
        type: "green tea",
        price: 125,
        favorites: false,
        discription: ""

    },

    jasmineGreen: {
        title: "Jasmine green tea",
        img: jasmine_tea,
        type: "green tea",
        price: 145,
        favorites: false,
        discription: ""

    },

    oolong: {
        title: "Oolong tea",
        img: oolong_tea,
        type: "oolong tea",
        price: 114,
        favorites: false,
        discription: ""

    },

    rooibos: {
        title: "Rooibos tea",
        img: rooibos_tea,
        type: "fruit&herbal tea",
        price: 123,
        favorites: false,
        discription: ""

    },

    white: {
        title: "White tea",
        img: white_tea,
        type: "white tea",
        price: 185,
        favorites: false,
        discription: ""

    }
}

// export const characters = Object.keys(goods);
// export const defaultHero = characters[0]