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

const { height, width } = Dimensions.get("window");

export const isPortrait = () => {
  if (height > width) return true;
  return false;
}

export const isLandscape = () => {
  if (height < width) return true;
  return false;
}

export const responsiveHeight = (h => (height * (h / 100)));

export const responsiveWidth = (w => width * (w / 100));

export const responsiveFontSize = (f => Math.sqrt((height * height) + (width * width)) * (f / 100));

export const crossResponsiveHeight = (iosPhone, iosTablet, androidPhone, androidTablet) => {
  const dimension = (Platform.OS === "ios"
    ? (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveHeight(iosPhone)
      : responsiveHeight(iosTablet))
    : (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveHeight(androidPhone)
      : responsiveHeight(androidTablet))
  );
  return dimension;
};

export const crossResponsiveWidth = (iosPhone, iosTablet, androidPhone, androidTablet) => {
  const dimension = (Platform.OS === "ios"
    ? (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveWidth(iosPhone)
      : responsiveWidth(iosTablet))
    : (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveWidth(androidPhone)
      : responsiveWidth(androidTablet))
  );
  return dimension;
};

export const crossResponsiveFontSize = (iosPhone, iosTablet, androidPhone, androidTablet) => {
  const fontSize = (Platform.OS === "ios"
    ? (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveFontSize(iosPhone)
      : responsiveFontSize(iosTablet))
    : (!NativeModules.RNDeviceInfo.isTablet
      ? responsiveFontSize(androidPhone)
      : responsiveFontSize(androidTablet))
  );
  return fontSize;
};

export const crossPlatformOS = (ios, android) => (Platform.OS === "ios" ? ios : android);

export const crossPlatformDevice = (iosPhone, iosTablet, androidPhone, androidTablet) => {
  const deviceProperty = (Platform.OS === "ios"
    ? (!NativeModules.RNDeviceInfo.isTablet
      ? iosPhone
      : iosTablet)
    : (!NativeModules.RNDeviceInfo.isTablet
      ? androidPhone
      : androidTablet)
  );
  return deviceProperty;
};

