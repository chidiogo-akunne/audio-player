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
