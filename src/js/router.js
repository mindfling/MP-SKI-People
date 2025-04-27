import Navigo from "navigo";
import { header } from "../components/header.js";

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });
console.log("router: ", router);

export const initRouter = () => {
  // my init router
  console.log("init router 😃");

  router
    .on("/", () => {
      console.log("Главная страница");
    })
    .on("/main", () => {
      console.log("Main page");
    })
    .on("/favorite", () => {
      console.log("Favorite page Избранное");
    })
    .on("/cart", () => {
      console.log("Cart Корзина");
    })
    .notFound(() => {
      console.log("page 404");
      alert(404);
    });

  router.resolve();
};
