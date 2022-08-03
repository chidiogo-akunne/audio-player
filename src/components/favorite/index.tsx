import { TouchableOpacity } from 'react-native';
import { useState, Fragment } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppTheme } from '@app/theme';

interface FavoriteProp {
  size?: number;
}

export default function Favorite(props: FavoriteProp) {
  const { size = 35 } = props;
  const [like, setLike] = useState(false);
  const { colors } = useAppTheme();

  const handleChange = () => {
    setLike(!like);
  };

  return (
    <TouchableOpacity onPress={handleChange}>
      <Fragment>
        {like ? (
          <MaterialIcons name="favorite" size={size} color={colors.RED} />
        ) : (
          <MaterialIcons
            name="favorite-border"
            size={size}
            color={colors.SECONDARY}
          />
        )}
      </Fragment>
    </TouchableOpacity>
  );
}
