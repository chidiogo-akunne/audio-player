import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationInterface } from 'typings/screens';

import { Container } from './styles';

export default function SplashScreen() {
  const navigation = useNavigation<NavigationInterface>();

  useEffect(() => {
    return navigation.navigate('BaseScreen');
  }, []);

  return (
    <Container>
      <Image
        source={require('../../../assets/images/icon.png')}
        style={{
          width: '100%',
          resizeMode: 'contain'
        }}
      />
    </Container>
  );
}
