import Home from '../views/pages/home';
import FavoriteRestaurants from '../views/pages/favorite';
import DetailRestaurants from '../views/pages/detail';
import Favorite from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/favorite': FavoriteRestaurants,
  '/detail/:id': DetailRestaurants,
  '/like': Favorite,
};
export default routes;
