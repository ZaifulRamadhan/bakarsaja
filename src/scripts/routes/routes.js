import Home from '../views/pages/home';
import FavoriteRestaurants from '../views/pages/favorite';
import DetailRestaurants from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/favorite': FavoriteRestaurants,
  '/detail/:id': DetailRestaurants,
};
export default routes;
