import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
    if (restaurant) {
      const detailHtml = createRestaurantDetailTemplate(restaurant);
      restaurantContainer.innerHTML = detailHtml;
    } else {
      restaurantContainer.innerHTML = '<p>Detail cafe tidak ditemukan</p>';
    }

    const skipToContentLink = document.querySelector('.skip-link');
    skipToContentLink.addEventListener('click', (event) => {
      event.preventDefault();
      const mainContent = document.querySelector('#mainContent');
      mainContent.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Detail;
