/**
 * MIT License
 *
 * Copyright (c) 2017-present David Mieloch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { NativeModules, Platform, Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const { height, width } = Dimensions.get("window");
export const isPortrait = () => {
  if (height > width) return true;
  return false;
};

export const isLandscape = () => {
  if (height < width) return true;
  return false;
};

export const responsiveHeight = h => height * (h / 100);

export const responsiveWidth = w => width * (w / 100);

export const responsiveFontSize = f =>
  Math.sqrt(height * height + width * width) * (f / 100);


export const crossResponsiveHeight = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet
) => {
  const dimension =
    Platform.OS === "ios"
      ? !NativeModules.RNDeviceInfo.isTablet
        ? responsiveHeight(iosPhone)
        : responsiveHeight(iosTablet)
      : !NativeModules.RNDeviceInfo.isTablet
        ? responsiveHeight(androidPhone)
        : responsiveHeight(androidTablet);
  return dimension;
};

export const crossResponsiveWidth = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet
) => {
  const dimension =
    Platform.OS === "ios"
      ? !NativeModules.RNDeviceInfo.isTablet
        ? responsiveWidth(iosPhone)
        : responsiveWidth(iosTablet)
      : !NativeModules.RNDeviceInfo.isTablet
        ? responsiveWidth(androidPhone)
        : responsiveWidth(androidTablet);
  return dimension;
};

export const crossResponsiveFontSize = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet
) => {
  const fontSize =
    Platform.OS === "ios"
      ? !NativeModules.RNDeviceInfo.isTablet
        ? responsiveFontSize(iosPhone)
        : responsiveFontSize(iosTablet)
      : !NativeModules.RNDeviceInfo.isTablet
        ? responsiveFontSize(androidPhone)
        : responsiveFontSize(androidTablet);
  return fontSize;
};

export const crossPlatformOS = (ios, android) =>
  Platform.OS === "ios" ? ios : android;

export const crossPlatformImg = image =>
  Platform.OS === "ios" ? image : image.slice(0, -4);

export const crossPlatformDevice = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet
) => {
  const deviceProperty =
    Platform.OS === "ios"
      ? !NativeModules.RNDeviceInfo.isTablet ? iosPhone : iosTablet
      : !NativeModules.RNDeviceInfo.isTablet ? androidPhone : androidTablet;
  return deviceProperty;
};

// iPhoneX

export const crossHeightX = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveHeight(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveHeight(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveHeight(iPhoneX);
  }
  return dimension;
};

export const heightX = (height, iPhoneX) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveHeight(height);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(height);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveHeight(height);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(height);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveHeight(iPhoneX);
  }
  return dimension;
};

export const crossWidthX = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveWidth(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveWidth(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveWidth(iPhoneX);
  }
  return dimension;
};

export const widthX = (width, iPhoneX) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveWidth(width);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(width);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveWidth(width);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(width);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveWidth(iPhoneX);
  }
  return dimension;
};

export const crossFontSizeX = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveFontSize(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveFontSize(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveFontSize(iPhoneX);
  }
  return dimension;
};

export const fontSizeX = (size, iPhoneX) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveFontSize(size);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(size);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet
  ) {
    dimension = responsiveFontSize(size);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(size);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveFontSize(iPhoneX);
  }
  return dimension;
};

// Note 8 - specific styling

export const fontSizeN8 = (size, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    return responsiveFontSize(note8);
  } else {
    return responsiveFontSize(size);
  }
};

export const widthN8 = (size, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    return responsiveWidth(note8);
  } else {
    return responsiveWidth(size);
  }
};

export const heightN8 = (size, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    return responsiveHeight(note8);
  } else {
    return responsiveHeight(size);
  }
};

// cross platform

export const crossHeightN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  note8
) => {
  if (Platform.OS === "ios" && !NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveHeight(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveHeight(note8);
  }
  return dimension;
};

export const crossWidthN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  note8
) => {
  if (Platform.OS === "ios" && !NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveWidth(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveWidth(note8);
  }
  return dimension;
};

export const crossFontSizeN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  note8
) => {
  if (Platform.OS === "ios" && !NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(iosTablet);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveFontSize(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveFontSize(note8);
  }
  return dimension;
};

export const crossFontSizeXN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX,
  note8
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveFontSize(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(iosTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveFontSize(iPhoneX);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveFontSize(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveFontSize(note8);
  }
  return dimension;
};

export const crossHeightXN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX,
  note8
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveHeight(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(iosTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveHeight(iPhoneX);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveHeight(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveHeight(note8);
  }
  return dimension;
};

export const crossWidthXN8 = (
  iosPhone,
  iosTablet,
  androidPhone,
  androidTablet,
  iPhoneX,
  note8
) => {
  if (
    Platform.OS === "ios" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    !NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")
  ) {
    dimension = responsiveWidth(iosPhone);
  } else if (Platform.OS === "ios" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(iosTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveWidth(iPhoneX);
  } else if (
    Platform.OS === "android" &&
    !NativeModules.RNDeviceInfo.isTablet &&
    NativeModules.RNDeviceInfo.deviceName !== "SM-N950U"
  ) {
    dimension = responsiveWidth(androidPhone);
  } else if (Platform.OS === "android" && NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(androidTablet);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveWidth(note8);
  }
  return dimension;
};

export const fontSizeXN8 = (size, iPhoneX, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveFontSize(iPhoneX);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveFontSize(note8);
  } else {
    dimension = responsiveFontSize(size);
  }
  return dimension;
};

export const widthXN8 = (size, iPhoneX, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveWidth(iPhoneX);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveWidth(note8);
  } else {
    dimension = responsiveWidth(size);
  }
  return dimension;
};
export const heightXN8 = (size, iPhoneX, note8) => {
  if (NativeModules.RNDeviceInfo.deviceName.includes("iPhone X")) {
    dimension = responsiveHeight(iPhoneX);
  } else if (NativeModules.RNDeviceInfo.deviceName === "SM-N950U") {
    dimension = responsiveHeight(note8);
  } else {
    dimension = responsiveHeight(size);
  }
  return dimension;
};

export const deviceHeight = (phone, tablet) => {
  if (!NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveHeight(phone);
  } else {
    dimension = responsiveHeight(tablet);
  }
  return dimension;
};
export const deviceWidth = (phone, tablet) => {
  if (!NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveWidth(phone);
  } else {
    dimension = responsiveWidth(tablet);
  }
  return dimension;
};
export const deviceFontSize = (phone, tablet) => {
  if (!NativeModules.RNDeviceInfo.isTablet) {
    dimension = responsiveFontSize(phone);
  } else {
    dimension = responsiveFontSize(tablet);
  }
  return dimension;
};
