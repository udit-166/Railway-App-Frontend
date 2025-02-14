import { Dimensions, Platform, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const getFontSize = (baseSize) => {
  const widthScaleFactor = SCREEN_WIDTH / 375;
  const heightScaleFactor = SCREEN_HEIGHT / 812;
  const averageScaleFactor = (widthScaleFactor + heightScaleFactor) / 2;

  const dynamicSize = baseSize * averageScaleFactor;
  return dynamicSize;
};

export const getHeight = (baseSize) => {
  var x = SCREEN_HEIGHT * baseSize;
  return x / 812;
};

export const getWidth = (baseSize) => {
  var x = SCREEN_WIDTH * baseSize;
  return x/375;
};