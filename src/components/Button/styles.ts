import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import theme from '../../global/themes/theme';

interface ButtonProps extends RectButtonProps {
    color: string;
}

export const Container = styled(RectButton) <ButtonProps>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;

    background-color: ${({ color }) => color };
`;

export const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.primary_500,
        fontSize: theme.fontSize.medium,
        color: theme.colors.shape
    }
});
