import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/mainLayout";

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {

  // my init router
  console.log("init router 😃");

  router
    .on("/", () => {
      console.log("Главная страница");

      document.body.prepend(header());

      document.body.append(main())

      document.body.append(footer());
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
