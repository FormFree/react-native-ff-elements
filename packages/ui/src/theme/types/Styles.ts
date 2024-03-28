import type { TextStyle, ViewStyle } from 'react-native';

export type Styles = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra: any; // Used by components to pass arbitrary props to makeStyles()

  // Constants
  headerBar: ViewStyle;
  headerBarLarge: ViewStyle;
  statusBar: ViewStyle;

  // Styles

  view: ViewStyle;
  viewAlt: ViewStyle;
  viewInv: ViewStyle;

  listItemContainer: ViewStyle;
  listItemBorder: ViewStyle;
  listItemTitle: TextStyle;
  listItemSubtitle: TextStyle;
  listItemValue: TextStyle;

  textHeadingXL: TextStyle;
  textHeading1: TextStyle;
  textHeading2: TextStyle;
  textHeading3: TextStyle;
  textHeading4: TextStyle;
  textHeading5: TextStyle;
  textXL: TextStyle;
  textLarge: TextStyle;
  textScreenTitle: TextStyle;
  textNormal: TextStyle;
  textSmall: TextStyle;
  textTiny: TextStyle;
  textLight: TextStyle;
  textMedium: TextStyle;
  textSemiBold: TextStyle;
  textBold: TextStyle;
  textDim: TextStyle;
  textPlaceholder: TextStyle;
  textLink: TextStyle;

  button: ViewStyle;
  buttonTitle: TextStyle;
  buttonDisabled: ViewStyle | TextStyle;
  buttonClear: ViewStyle;
  buttonClearTitle: TextStyle;
  buttonClearDisabled: ViewStyle | TextStyle;
  buttonOutline: ViewStyle;
  buttonOutlineTitle: TextStyle;
  buttonOutlineDisabled: ViewStyle | TextStyle;
  buttonInvOutline: ViewStyle;
  buttonInvOutlineTitle: TextStyle;
  buttonInvOutlineDisabled: ViewStyle | TextStyle;
  buttonInvClear: ViewStyle;
  buttonInvClearTitle: TextStyle;
  buttonInvClearDisabled: ViewStyle | TextStyle;
  buttonScreenHeader: ViewStyle;
  buttonScreenHeaderTitle: TextStyle;
  buttonScreenHeaderDisabled: ViewStyle | TextStyle;
  buttonInvScreenHeader: ViewStyle;
  buttonInvScreenHeaderTitle: TextStyle;
  buttonInvScreenHeaderDisabled: ViewStyle | TextStyle;

  shadow: ViewStyle;
  shadowGlow: ViewStyle;
  shadowShallow: ViewStyle;
  activityIndicator: ViewStyle;
};
