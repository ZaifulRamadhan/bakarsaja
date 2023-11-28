import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <div id="exploreRestaurant" class="explore">
          <h2 tabindex="0" class="content__heading">Now Playing in Cinema</h2>
          <div id="restaurants" class="restaurants">
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.nowPlayingRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
