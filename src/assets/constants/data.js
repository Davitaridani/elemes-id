// icon category
import cupcake from "../img/icons/cupcake.png";
import doughnut from "../img/icons/doughnut.png";
import kebab from "../img/icons/kebab.png";
import pizza from "../img/icons/pizza.png";
import salmon from "../img/icons/salmon.png";

// iamges products
import CupcakeChoco from "../img/products/CupcakeChoco.png";
import DonerKebab from "../img/products/DonerKebab.png";
import DoughnutMilk from "../img/products/DoughnutMilk.png";
import SalmonRoll from "../img/products/SalmonRoll.png";
import DoughnutUnicorn from "../img/products/DoughnutUnicorn.png";
import PizzaMeat from "../img/products/PizzaMeat.png";
import PizzaPaperoni from "../img/products/PizzaPaperoni.png";
import KathiKebab from "../img/products/KathiKebab.png";

import imgHot from "../img/hot.png";
import listHamburger from "../img/menu-hamburger.png";
import fullstar from "../img/icons/star.png";
import outlineStar from "../img/icons/outlineStar.png";

export const dataProducts = [
  {
    id: 1,
    title: "Pizza Paperoni",
    imgUrl: PizzaPaperoni,
    category: "Pizza",
    bgColor: "#E6F3F5",
    delayAos: 100,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
    ],
  },
  {
    id: 2,
    title: "Pizza Meat",
    imgUrl: PizzaMeat,
    category: "Pizza",
    bgColor: "#E6F3F5",
    delayAos: 200,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
      {
        star: outlineStar,
      },
    ],
  },
  {
    id: 3,
    title: "Doner Kebab",
    imgUrl: DonerKebab,
    category: "kebab",
    bgColor: "#EAEEFA",
    delayAos: 300,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
    ],
  },
  {
    id: 4,
    title: "Salmon Roll",
    imgUrl: SalmonRoll,
    category: "Salmon",
    bgColor: "#F9EEF3",
    delayAos: 400,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
    ],
  },
  {
    id: 5,
    title: "Cupcake Choco",
    imgUrl: CupcakeChoco,
    category: "Cupcake",
    bgColor: "#F0FEEB",
    delayAos: 100,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
    ],
  },
  {
    id: 6,
    title: "Doughnut Milk",
    imgUrl: DoughnutMilk,
    category: "Doughnut",
    bgColor: "#F3F7D9",
    delayAos: 200,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
    ],
  },
  {
    id: 7,
    title: "Doughnut Unicorn",
    imgUrl: DoughnutUnicorn,
    category: "Doughnut",
    bgColor: "#F3F7D9",
    delayAos: 300,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
    ],
  },
  {
    id: 8,
    title: "Kathi Kebab",
    imgUrl: KathiKebab,
    category: "Kebab",
    bgColor: "#EAEEFA",
    delayAos: 400,
    icon: [
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: fullstar,
      },
      {
        star: outlineStar,
      },
    ],
  },
];

export const navLinks = [
  { title: "Home" },
  { title: "About" },
  { title: "Promotions", badge: imgHot },
  { title: "Blogs" },
  { title: "Contact Us" },
];

export const categoryProducts = [
  {
    id: 1,
    imgUrl: cupcake,
    bgColor: "#F0FEEB",
    title: "Cupcake",
    amount: "22 Items",
  },
  {
    id: 2,
    imgUrl: pizza,
    bgColor: "#E4F2F4",
    title: "Pizza",
    amount: "25 Items",
  },
  {
    id: 3,
    imgUrl: kebab,
    bgColor: "#EAEEFA",
    title: "Kebab",
    amount: "12 Items",
  },
  {
    id: 4,
    imgUrl: salmon,
    bgColor: "#F9EEF3",
    title: "Salmon",
    amount: "22 Items",
  },
  {
    id: 5,
    imgUrl: doughnut,
    bgColor: "#F3F7D9",
    title: "Doughnut",
    amount: "22 Items",
  },
  {
    id: 6,
    imgUrl: kebab,
    bgColor: "#F0FEEB",
    title: "Kebab",
    amount: "12 Items",
  },
];

export const linksFooter = [
  {
    title: "Categories",
    itemsLink: [
      { link: "Cupcake" },
      { link: "Pizza" },
      { link: "Kebab" },
      { link: "Salmon" },
      { link: "Dougnut" },
    ],
  },
  {
    title: "About Us",
    itemsLink: [
      { link: "About Us" },
      { link: "FAQ" },
      { link: "Report Problem" },
    ],
  },
];

export const dataListHamburger = [
  {
    imgUrl: listHamburger,
    title: "Home",
  },
  {
    imgUrl: listHamburger,
    title: "Promotions",
  },
  {
    imgUrl: listHamburger,
    title: "Others",
  },
];
