import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  padding: ${RFValue(20)}px ${RFValue(10)}px ${RFValue(10)}px;
`;
