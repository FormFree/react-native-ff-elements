import { Dimensions, Platform } from 'react-native';

import type { Styles } from './types/Styles';
import { makeStyles } from '@rneui/themed';

export const fontFamily = 'WorkSans-Regular';
export const fontFamilyBold = 'WorkSans-Bold';
export const fontFamilyLight = 'WorkSans-Light';
export const fontFamilyMedium = 'WorkSans-Medium';
export const fontFamilySemiBold = 'WorkSans-SemiBold';

export const fontSizes = {
  tiny: 12,
  small: 14,
  normal: 16,
  large: 18,
  xl: 26,
  headingXL: 45,
  heading1: 30,
  heading2: 26,
  heading3: 22,
  heading4: 20,
  heading5: 18,
};

export const viewport = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const useStyles = makeStyles(
  (theme): Styles => ({
    extra: undefined,
    /**
     * Constants
     */
    headerBar: {
      ...Platform.select({
        android: {
          height: 44,
        },
        ios: {
          height: 44,
        },
      }),
    },
    headerBarLarge: {
      ...Platform.select({
        android: {
          height: 0,
        },
        ios: {
          height: 96,
        },
      }),
    },
    statusBar: {
      ...Platform.select({
        android: {
          height: 20,
        },
        ios: {
          height: 20,
        },
      }),
    },
    /**
     * View
     */
    view: {
      height: '100%',
      paddingHorizontal: 15,
      backgroundColor: theme.colors.viewBackground,
    },
    viewAlt: {
      height: '100%',
      paddingHorizontal: 15,
      backgroundColor: theme.colors.viewAltBackground,
    },
    viewInv: {
      height: '100%',
      paddingHorizontal: 15,
      backgroundColor: theme.colors.viewInvBackground,
    },
    /**
     * Text
     */
    textHeadingXL: {
      color: theme.colors.text,
      marginVertical: 10,
      fontSize: fontSizes.headingXL,
      fontFamily: fontFamilyBold,
    },
    textHeading1: {
      color: theme.colors.text,
      marginVertical: 10,
      fontSize: fontSizes.heading1,
      fontFamily: fontFamilyBold,
    },
    textHeading2: {
      color: theme.colors.text,
      marginVertical: 10,
      fontSize: fontSizes.heading2,
      fontFamily: fontFamilyBold,
    },
    textHeading3: {
      color: theme.colors.text,
      marginVertical: 10,
      fontSize: fontSizes.heading3,
      fontFamily: fontFamilyBold,
    },
    textHeading4: {
      color: theme.colors.text,
      marginVertical: 4,
      fontSize: fontSizes.heading4,
      fontFamily: fontFamilyBold,
    },
    textHeading5: {
      color: theme.colors.text,
      marginVertical: 4,
      fontSize: fontSizes.heading5,
      fontFamily: fontFamilyBold,
    },
    textLarge: {
      color: theme.colors.text,
      fontSize: fontSizes.large,
      fontFamily,
      fontWeight: 'normal',
    },
    textXL: {
      color: theme.colors.text,
      fontSize: fontSizes.xl,
      fontFamily,
      fontWeight: 'normal',
    },
    textScreenTitle: {
      color: theme.colors.black,
      fontSize: 17,
      fontFamily,
      fontWeight: '600',
    },
    textNormal: {
      color: theme.colors.text,
      fontSize: fontSizes.normal,
      fontFamily,
      fontWeight: 'normal',
    },
    textSmall: {
      color: theme.colors.text,
      fontSize: fontSizes.small,
      fontFamily,
      fontWeight: 'normal',
    },
    textTiny: {
      color: theme.colors.text,
      fontSize: fontSizes.tiny,
      fontFamily,
      fontWeight: 'normal',
    },
    textLight: {
      fontFamily: fontFamilyLight,
      fontWeight: 'normal',
    },
    textMedium: {
      fontFamily: fontFamilyMedium,
      fontWeight: 'normal',
    },
    textSemiBold: {
      fontFamily: fontFamilySemiBold,
      fontWeight: 'normal',
    },
    textBold: {
      fontFamily: fontFamilyBold,
      fontWeight: '600',
    },
    textDim: {
      opacity: 0.4,
    },
    textPlaceholder: {
      opacity: 0.4,
    },
    textLink: {
      color: theme.colors.textLink,
      textDecorationLine: 'underline',
    },
    /**
     * Button
     */
    button: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: 50,
      height: 40,
      paddingHorizontal: 15,
      minWidth: 180,
    },
    buttonTitle: {
      color: theme.colors.white,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonDisabled: {
      opacity: 0.4,
    },
    buttonClear: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 15,
      minWidth: 180,
    },
    buttonClearTitle: {
      color: theme.colors.brandPrimary,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonClearDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    buttonOutline: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 15,
      minWidth: 180,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: theme.colors.brandPrimary,
    },
    buttonOutlineTitle: {
      color: theme.colors.brandPrimary,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonOutlineDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    buttonInvOutline: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 15,
      minWidth: 180,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: theme.colors.stickyWhite,
    },
    buttonInvOutlineTitle: {
      color: theme.colors.textInv,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonInvOutlineDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    buttonInvClear: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 15,
      minWidth: 180,
    },
    buttonInvClearTitle: {
      color: theme.colors.textInv,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonInvClearDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    buttonScreenHeader: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 0,
      minWidth: 0,
      justifyContent: 'flex-start',
    },
    buttonScreenHeaderTitle: {
      color: theme.colors.screenHeaderButtonText,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonScreenHeaderDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    buttonInvScreenHeader: {
      backgroundColor: theme.colors.transparent,
      height: 40,
      paddingHorizontal: 0,
      minWidth: 0,
      justifyContent: 'flex-start',
    },
    buttonInvScreenHeaderTitle: {
      color: theme.colors.stickyWhite,
      fontSize: fontSizes.normal,
      fontFamily,
      ...Platform.select({
        ios: {
          marginTop: 0,
        },
        android: {
          marginTop: -2,
        },
      }),
    },
    buttonInvScreenHeaderDisabled: {
      backgroundColor: theme.colors.transparent,
      opacity: 0.4,
    },
    listItemContainer: {
      backgroundColor: theme.colors.listItem,
      borderColor: theme.colors.listItemBorder,
      paddingLeft: 15,
      overflow: 'hidden',
    },
    listItemBorder: {
      left: 15,
      right: 0,
      borderColor: theme.colors.listItemBorder,
    },
    listItemTitle: {
      color: theme.colors.text,
      fontSize: fontSizes.normal,
      fontFamily,
      minWidth: 150,
    },
    listItemSubtitle: {
      color: theme.colors.textDim,
      fontSize: fontSizes.small,
      fontFamily,
      fontWeight: 'normal',
    },
    listItemValue: {
      color: theme.colors.text,
      fontSize: fontSizes.normal,
      fontFamily,
      textAlign: 'right',
    },
    /**
     * Shadow
     */
    shadow: {
      shadowColor: theme.colors.stickyBlack,
      ...Platform.select({
        ios: {
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.45,
          shadowRadius: 4.27,
        },
        android: {
          elevation: 10,
          backgroundColor: theme.colors.black,
        },
      }),
    },
    shadowGlow: {
      shadowColor: theme.colors.black,
      ...Platform.select({
        ios: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowopacity: 0.44,
          shadowRadius: 10,
        },
        android: {
          elevation: 10,
          backgroundColor: theme.colors.black,
        },
      }),
    },
    shadowShallow: {
      shadowColor: theme.colors.stickyBlack,
      ...Platform.select({
        ios: {
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.45,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
          backgroundColor: theme.colors.black,
        },
      }),
    },
    /**
     * Miscellaneous
     */
    activityIndicator: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.hintGray,
    },
  }),
);
