import { TouchableOpacity } from 'react-native';
import { Fragment, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppTheme } from '@app/theme';
import { useContextTheme } from '@context/index';
import { DataType } from 'typings/types';
import { useIsFocused } from '@react-navigation/native';
import Storage from '@libs/storage';

interface FavoriteProp {
  size?: number;
  item: DataType;
}

export default function Favorite(props: FavoriteProp) {
  const { size = 35, item } = props;
  const isFocused = useIsFocused();
  const { colors } = useAppTheme();
  const favoriteTheme = useContextTheme();
  const isFavorite = favoriteTheme.state.like;
  const checkIsFovarite =
    isFavorite?.favorite && isFavorite?.title === item?.title;

  const handleChange = async () => {
    // update like state using context
    if (checkIsFovarite) {
      favoriteTheme.dispatch({
        type: 'UNLIKE',
        payload: { favorite: false, title: '' }
      });
      // update like state in async storage
      await Storage.resetFavorite();
    } else {
      // update like state using context
      favoriteTheme.dispatch({
        type: 'LIKED',
        payload: { favorite: true, title: item?.title }
      });
      // update like state in async storage
      await Storage.setFavorite(item);
    }
  };

  const getFavorite = async () => {
    //check favorite state in storage and update context
    const checkFavorite = await Storage.checkFavorite();
    if (!checkFavorite) return;
    const isFavorite = JSON.parse(checkFavorite!);
    if (isFavorite?.title === item?.title) {
      favoriteTheme.dispatch({
        type: 'LIKED',
        payload: { favorite: true, title: item?.title }
      });
    }
  };

  useEffect(() => {
    getFavorite();
  }, [isFocused]);

  return (
    <TouchableOpacity onPress={handleChange} testID={'favorite'}>
      <Fragment>
        {checkIsFovarite ? (
          <MaterialIcons name="favorite" size={size} color={colors.BLACK} />
        ) : (
          <MaterialIcons
            name="favorite-border"
            size={size}
            color={colors.BLACK}
          />
        )}
      </Fragment>
    </TouchableOpacity>
  );
}
