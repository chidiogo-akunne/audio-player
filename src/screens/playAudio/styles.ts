import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  padding: ${RFValue(30)}px ${RFValue(15)}px ${RFValue(15)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 3)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_SEMIBOLD};
  text-align: center;
  margin: ${RFValue(2)}px 0;
`;

export const FavoriteCover = styled.View`
  position: absolute;
  align-self: flex-end;
  top: ${RFValue(195)}px;
  z-index: 99999;
  margin-right: ${RFValue(5)}px;
`;

export const AudioCover = styled.View`
  height: ${RFValue(250)}px;
  width: 95%;
  align-self: center;
`;

export const Overlay = styled.View`
  background-color: ${({ theme }) => theme.colors.BLACK};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.2;
`;

export const IconCover = styled.View`
  position: relative;
  align-self: center;
  top: ${RFValue(90)}px;
`;
