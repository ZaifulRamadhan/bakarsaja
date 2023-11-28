import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIDB = {
  async getRestau(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestau() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestau(resto) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteRestau(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIDB;
