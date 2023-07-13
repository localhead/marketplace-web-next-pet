import { Form } from '@features/forms/components/Form';
import { colors, Typography } from '@packages/uiKit';
import styled from 'styled-components';

export const StyledRegistrationForm = styled(Form)`
  overflow: hidden;
`;

export const StyledFieldsGrid = styled.div`
  margin-bottom: 38px;
`;

export const StyledAgreeCheckboxLabel = styled(Typography).attrs({
  size: 10,
  weight: 500,
  color: 'gray3',
})``;

export const StyledAgreeLink = styled.a`
  text-decoration: underline;
  color: ${colors.gray3};

  :hover {
    color: ${colors.gray2};
    text-decoration: underline;
  }
`;
