import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

/**
 * function for loading all app assets {fonts, images}
 * @function AppLoading
 */
export default async function AppLoading() {
  // Cache all images using expo image downloader by reading
  // image path and writing it to expo memory for faster load time
  const cacheImages = (images: number[]) => {
    return images.map((image) => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  // Cache all fonts using expo font loader by reading
  // font path and writing it to expo memory for faster load time
  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const imageAssets = cacheImages([
    require('@assets/images/icon.png'),
    require('@assets/images/splash.png'),
    require('@assets/images/adaptive-icon.png')
  ]);

  const fontAssets = cacheFonts([
    {
      POPPINS_EXTRABOLD: require('@assets/fonts/Poppins-ExtraBold.ttf')
    },
    {
      POPPINS_BOLD: require('@assets/fonts/Poppins-Bold.ttf')
    },
    {
      POPPINS_SEMIBOLD: require('@assets/fonts/Poppins-SemiBold.ttf')
    },
    {
      POPPINS_THIN: require('@assets/fonts/Poppins-Thin.ttf')
    },
    {
      POPPINS_LIGHT: require('@assets/fonts/Poppins-Light.ttf')
    },
    {
      POPPINS_MEDIUM: require('@assets/fonts/Poppins-Medium.ttf')
    },
    {
      POPPINS_REGULAR: require('@assets/fonts/Poppins-Regular.ttf')
    }
  ]);

  return Promise.all<Promise<boolean | Asset | void>>([
    ...imageAssets,
    ...fontAssets
  ]);
}
