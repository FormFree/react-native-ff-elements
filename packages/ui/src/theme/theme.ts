import { CreateThemeOptions, createTheme } from '@rneui/themed';

import { Platform } from 'react-native';

export const theme: CreateThemeOptions = {
  darkColors: {
    brandPrimary: '#0078fe',
    brandSecondary: '#8543c7',

    white: '#000000',
    black: '#ffffffde',
    stickyWhite: '#ffffff',
    stickyBlack: '#000000',
    transparent: '#00000000',

    text: '#ffffffde',
    textLight: '#878787',
    textDim: '#878787',
    textInv: '#ffffffde',
    textLink: '#0078fe',
    textLinkInv: '#ffffffde',
    textPlaceholder: '#878787',

    darkGray: '#ffffffde',
    midGray: '#787878',
    lightGray: '#787878',
    subtleGray: '#101010',
    hintGray: '#101010',
    wispGray: '#101010',

    blackTransparentDarker: 'rgba(255, 255, 255, 0.9)',
    blackTransparentDark: 'rgba(255, 255, 255, 0.7)',
    blackTransparentMid: 'rgba(255, 255, 255, 0.5)',
    blackTransparentLight: 'rgba(255, 255, 255, 0.3)',
    blackTransparentSubtle: 'rgba(255, 255, 255, 0.05)',

    whiteTransparentDarker: 'rgba(0, 0, 0, 0.8)',
    whiteTransparentDark: 'rgba(0, 0, 0, 0.7)',
    whiteTransparentMid: 'rgba(0, 0, 0, 0.4)',
    whiteTransparentLight: 'rgba(0, 0, 0, 0.2)',
    whiteTransparentSubtle: 'rgba(0, 0, 0, 0.1)',

    primary: '#0078fe',
    warning: '#ff804b',
    success: '#00a000',
    error: '#c00000',
    assertive: '#c00000',
    assertiveInv: '#ff804b',
    calm: '#0078fe',

    button: '#0078fe',
    buttonText: '#ffffffde',
    buttonInv: '#0078fe',

    screenHeaderTitle: '#ffffffde',
    screenHeaderBackground: '#000000',
    screenHeaderInvBackground: '#0078fe',

    viewBackground: '#000000',
    viewAltBackground: '#000000',
    viewInvBackground: '#0078fe',

    ...Platform.select({
      ios: {
        switchOffThumb: '#ffffff',
        switchOnThumb: '#ffffff',
        switchOffTrack: '#e5e5e5',
        switchOnTrack: '#007bff',
        screenHeaderButtonText: '#007bff',
        screenHeaderInvButtonText: '#ffffffde',
      },
      android: {
        switchOffThumb: '#787878',
        switchOnThumb: '#007bff',
        switchOffTrack: '#e5e5e5',
        switchOnTrack: '#007bff40',
        screenHeaderButtonText: '#ffffffde',
        screenHeaderInvButtonText: '#ffffffde',
      },
    }),
  },
  lightColors: {
    brandPrimary: '#007bff',
    brandSecondary: '#0078fe',

    white: '#ffffff',
    black: '#000000',
    stickyWhite: '#ffffff',
    stickyBlack: '#000000',
    transparent: '#00000000',

    text: '#101010',
    textLight: '#787878',
    textDim: '#aaaaaa',
    textInv: '#ffffff',
    textLink: '#0078fe',
    textLinkInv: '#ffffff',
    textPlaceholder: '#878787',

    darkGray: '#545454',
    midGray: '#787878',
    lightGray: '#aaaaaa',
    subtleGray: '#e5e5e5',
    hintGray: '#f0f0f0',
    wispGray: '#f8f8f8',

    blackTransparentDarker: 'rgba(0, 0, 0, 0.8)',
    blackTransparentDark: 'rgba(0, 0, 0, 0.7)',
    blackTransparentMid: 'rgba(0, 0, 0, 0.4)',
    blackTransparentLight: 'rgba(0, 0, 0, 0.2)',
    blackTransparentSubtle: 'rgba(0, 0, 0, 0.1)',

    whiteTransparentDarker: 'rgba(255, 255, 255, 0.9)',
    whiteTransparentDark: 'rgba(255, 255, 255, 0.7)',
    whiteTransparentMid: 'rgba(255, 255, 255, 0.5)',
    whiteTransparentLight: 'rgba(255, 255, 255, 0.3)',
    whiteTransparentSubtle: 'rgba(255, 255, 255, 0.05)',

    primary: '#0078fe',
    warning: '#ff804b',
    success: '#00a000',
    error: '#c00000',
    assertive: '#c00000',
    assertiveInv: '#ff804b',
    calm: '#0078fe',

    button: '#0078fe',
    buttonText: '#ffffff',
    buttonInv: '#0078fe',

    screenHeaderTitle: '#000000',
    screenHeaderBackground: '#ffffff',
    screenHeaderInvBackground: '#0078fe',

    viewBackground: '#f0f0f0',
    viewAltBackground: '#ffffff',
    viewInvBackground: '#0078fe',

    ...Platform.select({
      ios: {
        switchOffThumb: '#ffffff',
        switchOnThumb: '#ffffff',
        switchOffTrack: '#787878',
        switchOnTrack: '#007bff',
        screenHeaderButtonText: '#007bff',
        screenHeaderInvButtonText: '#ffffff',
      },
      android: {
        switchOffThumb: '#cccccc',
        switchOnThumb: '#007bff',
        switchOffTrack: '#787878',
        switchOnTrack: '#007bff40',
        screenHeaderButtonText: '#000000',
        screenHeaderInvButtonText: '#ffffff',
      },
    }),
  },
};

createTheme(theme);
