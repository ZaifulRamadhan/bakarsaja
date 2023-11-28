import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (Restaurant) => `
  <h2 class="Restaurant__title">${Restaurant.name}</h2>
  <img class="Restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + Restaurant.pictureId}" alt="${Restaurant.name}" />
  <div class="Restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${Restaurant.address}</p>
    <h4>City</h4>
    <p>${Restaurant.city}</p>
    <h4>Categories</h4>
    <ul>
      ${Restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
    </ul>
    <h4>Duration</h4>
    <p>${Restaurant.pictureId} minutes</p>
    <h4>Rating</h4>
    <p>${Restaurant.rating}</p>
  </div>
  <div class="Restaurant__overview">
    <h3>Overview</h3>
    <p>${Restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (Restaurant) => `
  <div class="Restaurant-item">
    <div class="Restaurant-item__header">
      <img class="lazyload" tabindex="0" id="restaurant-item__header__image" alt="${Restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + Restaurant.pictureId}" alt="${Restaurant.name || '-'}">
      <div class="Restaurant-item__header__rating">
        <p>⭐️<span class="Restaurant-item__header__rating__score">${Restaurant.rating || '-'}</span></p>
        <div class="restaurant-info>
            <h2 class="restaurant-title" tabindex="0" ><a href="#/detail/${Restaurant.id}">${Restaurant.name || '-'}</a></h2>
          <p class="restaurant-desc">${Restaurant.description || '-'}</p>
        </div>
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
