# react-native-cross-responsive-dimensions 
<!-- [![Travis Build Status](https://img.shields.io/travis/drumnation/react-native-cross-platform-responsive-dimensions.svg?style=flat-square)](https://travis-ci.org/drumnation/react-native-cross-responsive-dimensions) [![David](https://img.shields.io/david/dev/drumnation/react-native-cross-responsive-dimensions.svg?style=flat-square)](https://david-dm.org/drumnation/react-native-cross-responsive-dimensions?type=dev) -->
[![npm](https://img.shields.io/npm/dt/react-native-cross-platform-responsive-dimensions.svg?style=flat-square)](https://www.npmjs.com/package/react-native-cross-platform-responsive-dimensions)

I made this based off of react-native-responsive-dimensions which uses the device size from react's native modules to allow you to scale X and Y in your app based on the device size. This worked great, but when I started working on the Tablet version and everything was a different aspect ratio I realized I needed to be able to set different properties for tablet and phone.  I used a ternary and used the NativeModules to determine whether the user was on tablet or not.  

As soon as I started working on the Android version I realized I would need specific settings for that too.  The ternary became nested and intense and I wanted to abstract it away.  Hence this component.  I hope it helps you.  I plan to keep working on it to make cross platform and device styling a lot easier.

## Install
```bash
$ npm install react-native-cross-responsive-dimensions --save
```

## Usage
1. Add an import to the top of your file with the methods you need.
    ```js
    import {
        responsiveHeight,
        responsiveWidth,
        responsiveFontSize,
        crossResponsiveHeight,
        crossResponsiveWidth,
        crossResponsiveFontSize,
        crossPlatformOS,
        crossPlatformDevice } from "react-native-cross-platform-responsive-dimensions";
    ```
2. Use the cross platform methods in your jss stylesheets. The function takes allows you to use responsive dimensions, setting different values with arguments that match the device: (IOS phone, IOS tablet, AndroidPhone, AndroidTablet)
    ```
    container: {
        backgroundColor: "white",
        height: crossResponsiveHeight(43, 43, 43, 43),
        marginLeft: crossResponsiveWidth(10, 10, 10, 10),
        marginRight: crossResponsiveWidth(10, 10, 10, 10),
        top: crossResponsiveHeight(-14, -14, -14, -14),
        width: crossResponsiveWidth(80, 80, 80, 80)
    },
    ```

## License
MIT © [drumnation](https://github.com/drumnation/react-native-cross-responsive-dimensions)