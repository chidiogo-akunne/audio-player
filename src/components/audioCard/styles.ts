import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.GREY_DARK};
  margin-top: ${RFValue(10)}px;
`;

export const UpperCover = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;
  position: relative;
`;

export const RatingCover = styled.View`
  position: absolute;
  z-index: 9999999;
`;

export const LowerCover = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(10)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY};
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 2)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_SEMIBOLD};
  margin-left: auto;
`;

export const FavoriteCover = styled.View`
  margin-left: auto;
`;
