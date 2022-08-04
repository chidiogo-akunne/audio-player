import AsyncStorage from '@react-native-async-storage/async-storage';
import { STAR_RATINGS, FAVORITE } from '@constants';
import { StarRatingType, DataType } from 'typings/types';

class Storage {
  async clearStorage() {
    return AsyncStorage.clear();
  }

  async getStarRatings() {
    return AsyncStorage.getItem(STAR_RATINGS);
  }

  async setStarRating(ratings?: StarRatingType) {
    const storageData = await this.getStarRatings();
    if (!storageData) {
      return await AsyncStorage.setItem(
        STAR_RATINGS,
        JSON.stringify({ ...ratings })
      );
    }

    const starRating = JSON.parse(storageData) as StarRatingType;
    const checkRating = starRating?.rating?.filter(
      (rating: any) => rating?.tile?.title !== ratings?.rating[0]?.tile?.title
    );
    const data = { rating: [...starRating.rating, ...ratings?.rating!] };
    if (checkRating) {
      const checkdata = {
        rating: [...checkRating, ...ratings?.rating!]
      };
      await AsyncStorage.setItem(STAR_RATINGS, JSON.stringify(checkdata));
    } else {
      await AsyncStorage.setItem(STAR_RATINGS, JSON.stringify(data));
    }
  }

  async checkFavorite() {
    return AsyncStorage.getItem(FAVORITE);
  }

  async setFavorite(like?: DataType) {
    return await AsyncStorage.setItem(FAVORITE, JSON.stringify(like));
  }

  async resetFavorite() {
    return AsyncStorage.setItem(FAVORITE, '');
  }
}

export default new Storage();
