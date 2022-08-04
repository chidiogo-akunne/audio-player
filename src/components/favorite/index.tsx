import { TouchableOpacity } from 'react-native';
import { Fragment } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppTheme } from '@app/theme';
import { useContextTheme } from '@context/index';
import { DataType } from 'typings/types';

interface FavoriteProp {
  size?: number;
  item: DataType;
}

export default function Favorite(props: FavoriteProp) {
  const { size = 35, item } = props;
  const { colors } = useAppTheme();
  const favoriteTheme = useContextTheme();
  const isFavorite = favoriteTheme.state.like;
  const checkIsFovarite =
    isFavorite?.favorite && isFavorite?.title === item?.title;

  const handleChange = () => {
    // update like state using context
    if (checkIsFovarite) {
      favoriteTheme.dispatch({
        type: 'UNLIKE',
        payload: { favorite: false, title: '' }
      });
    } else {
      favoriteTheme.dispatch({
        type: 'LIKED',
        payload: { favorite: true, title: item?.title }
      });
    }
  };

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
