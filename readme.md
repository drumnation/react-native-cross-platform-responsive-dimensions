# react-native-cross-platform-responsive-dimensions 
<!-- [![Travis Build Status](https://img.shields.io/travis/drumnation/react-native-cross-platform-responsive-dimensions.svg?style=flat-square)](https://travis-ci.org/drumnation/react-native-cross-responsive-dimensions) [![David](https://img.shields.io/david/dev/drumnation/react-native-cross-responsive-dimensions.svg?style=flat-square)](https://david-dm.org/drumnation/react-native-cross-responsive-dimensions?type=dev) -->
[![npm](https://img.shields.io/npm/dt/react-native-cross-platform-responsive-dimensions.svg?style=flat-square)](https://www.npmjs.com/package/react-native-cross-platform-responsive-dimensions)

## Here's a little magic to make your cross-platform JSS pop...

This package started as a fork of react-native-responsive-dimensions which allows developers to use percentages in their JSS to scale integer values based on the user's device dimensions. This worked great for me and was using it all the time, but when I started working on the tablet version of my app I quickly realized that tablets have a different aspect ratio than phones. And this meant I needed to set a different value for tablets that when scaled would look correctly on all other tablets. When I finished with my phone and tablet build for IOS, I shifted to Android and was disappointed to see that my app looked like it had been in a terrible car accident.

## Android and IOS won't interpret your codebase the same.

Android and IOS will not always process the same style property in the same way, a perfect example is how custom React-Native fonts work.  On IOS you need to use the font's display name in the stylesheet while on Android you need to downcase the font, underscore, and add the font style ex. "myriadpro_regular". 

In this situation you are forced to list each in it's own distinct way because neither will understand the other.  There are a whole host of tiny differences that pop up between platforms and my goal was to create an API with the tools to solve these problems as elegantly as possible.

## Workflow.

One of the best ways to use this API is to get a huge USB splitter and connect at minimum an iPhone, IOS tablet, Android Phone, and Android Tablet... also connecting other unique devices such as the iPhone X or Samsung Note 8. When each device has finished booting into the debug version of your app, set each device to hot reload (and only 1 device for debugging if you need it, they will fight each other for it).  

It can take a few tries to get everything hot reloading at the same time, but now you'll be able to see any change you make to any of these different device types instantly.  This npm makes it really easy to tweak everything at the same time so that you can style for all devices simulataneously.

## The Value of React-Native.

As a React-Native developer our greatest value to our clients is the ability to produce products rapidly that work on as many devices as possible, with only one codebase. This is my best shot at it so far.  I hope it helps you.

## Install
```bash
$ npm install react-native-cross-platform-responsive-dimensions --save
```

## Usage
1. Add an import to the top of your file with the methods you need. 

    **Available API Methods:**

```js
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    heightX,
    widthX,
    fontSizeX,
    heightN8,
    widthN8,
    fontSizeN8,
    crossResponsiveHeight,
    crossResponsiveWidth,
    crossResponsiveFontSize,
    crossPlatformOS,
    crossPlatformDevice,
    crossWidthX,
    crossHeightX 
    crossFontSizeX,
    crossWidthN8,
    crossHeightN8 
    crossFontSizeN8,
    } from "react-native-cross-platform-responsive-dimensions";
```

2. Use these positioning methods like **crossPlatformHeight(IOS phone, IOS tablet, AndroidPhone, AndroidTablet)** in your JSS stylesheets. You won't always need a different value for each OS or device type, so make sure to use the method that allows you to be only as specific as you need.
    
```js
const styles = StyleSheet.create({
    modal: {
        alignSelf: "center",
        backgroundColor: teal,
        borderRadius: responsiveHeight(5),
        display: "flex",
        justifyContent: "space-between",
        marginBottom: crossResponsiveHeight(31, 32, 31, 32),
        marginTop: crossResponsiveHeight(36, 32.5, 36, 32.5),
        width: crossResponsiveWidth(75, 55, 75, 55)
    },
    modalItem: {
        alignContent: "center",
        alignSelf: "center",
        backgroundColor: transparent,
        textAlign: "center",
        width: responsiveWidth(55)
    },
    modalBounceGoalText: {
        fontFamily: crossPlatformOS("Neuropolitical", "neuropolitical_regular"),
        fontSize: responsiveFontSize(3.5),
        marginTop: responsiveHeight(2),
        color: white
    },
    modalBadgeNameText: {
        color: white,
        fontWeight: "400",
        fontFamily: crossPlatformOS("Myriad Pro", "myriadpro_regular"),
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(2)
    },
    badgeImage: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        height: crossResponsiveWidth(25, 20, 20, 15),
        marginLeft: responsiveWidth(1),
        marginRight: responsiveWidth(1),
        width: crossResponsiveWidth(25, 20, 20, 15)
    },
    xImage: {
        height: responsiveHeight(4.5),
        width: responsiveHeight(4.5)
    },
    xContainer: {
        alignSelf: "flex-end",
        display: "flex",
        top: crossResponsiveHeight(1.8, 1.5, 2, 2),
        marginRight: crossResponsiveWidth(8, 4.5, 12, 12),
        width: responsiveWidth(4)
    }
});
```

3. Use **crossPlatformDevice(iosPhone, iosTablet, androidPhone, androidTablet)** for the same cross platform ease, but without the responsive scaling, put anything you want into the method and use it like a switch.

```html
<Image
    style={crossPlatformDevice(
        styles.giantBallImage,
        styles.giantBallImageTablet,
        styles.giantBallImage,
        styles.giantBallImageTablet
    )}
    source={require("../../../img/home_ball.png")}
/>
```

4. Use **crossPlatformOS(ios, android)** when you don't need to specify individual values for all devices, but only need to specify either android or ios. Similar to the **crossPlatformDevice** this doesn't produce an integer value. 

    This is useful for fonts because each OS requires the font be stated differently.

```js
crossPlatformOS("Neuropolitical", "neuropolitical_regular")
```

5. The original **react-native-responsive-dimensions** commands are also available to use if you're ok setting the same value for all devices or creating your own conditional statement for each separate element.

```js
height: responsiveHeight(43),
marginLeft: responsiveWidth(10),
fontSize: responsiveFontSize(4)
```

## iPhone X

I've added some new functions to deal with devices that don't quite fit the dimensions of normal phones.  If you find you need to move something specifically for the notch on the iPhoneX, you can use these functions to do so.


#### 1. Keep your cross-platform styles but set specific values for iPhoneX.

```js
crossHeightX(iosPhone, iosTablet, androidPhone, androidTablet, iPhoneX)
```

#### 2. ResponsiveHeight for all devices except specific values for iPhoneX.

```js
heightX(height, iPhoneX)
```

#### 3. Keep your cross-platform styles but set specific values for iPhoneX.

```js
crossWidthX(iosPhone, iosTablet, androidPhone, androidTablet, iPhoneX)
```
#### 4. ResponsiveWidth for all devices except specific values for iPhoneX.

```js
widthX(width, iPhoneX)
```

#### 5. Keep your cross-platform styles but set specific values for iPhoneX.

```js
crossFontSizeX(iosPhone, iosTablet, androidPhone, androidTablet, iPhoneX)
```

#### 6. ResponsiveFontSize for all devices except specific values for iPhoneX.

```js
fontSizeX(size, iPhoneX)
```

## iPhone X Example
    
    flexContainer: {
        backgroundColor: white,
        borderColor: grey,
        borderRadius: responsiveHeight(100),
        borderWidth: 1,
        display: "flex",
        left: crossWidthX(72, 68.5, 72, 66.5, 78.5),
        padding: crossHeightX(1, 2.1),
        position: "absolute",
        top: crossResponsiveHeight(41, 39.5, 40, 39.5),
        zIndex: 1
    }

## Note 8

#### 1. Keep your cross-platform styles but set specific values for note8.

```js
crossHeightN8(iosPhone, iosTablet, androidPhone, androidTablet, note8)
```

#### 2. ResponsiveHeight for all devices except specific values for note8.

```js
heightN8(height, note8)
```

#### 3. Keep your cross-platform styles but set specific values for note8.

```js
crossWidthN8(iosPhone, iosTablet, androidPhone, androidTablet, note8)
```

#### 4. ResponsiveWidth for all devices except specific values for the Note8.

```js
widthN8(width, note8)
```

#### 5. Keep your cross-platform styles but set specific values for the Note8.

```js
crossFontSizeN8(iosPhone, iosTablet, androidPhone, androidTablet, note8)
```

#### 6. ResponsiveFontSize for all devices except specific values for the Note8.

```js
fontSizeN8(size, note8)
```

## Note 8 Example
    
```js
flexContainer: {
    backgroundColor: white,
    borderColor: grey,
    borderRadius: responsiveHeight(100),
    borderWidth: 1,
    display: "flex",
    left: crossWidthN8(72, 68.5, 72, 66.5, 78.5),
    padding: crossHeightN8(1, 2.1),
    position: "absolute",
    top: crossResponsiveHeight(41, 39.5, 40, 39.5),
    zIndex: 1
}
```
## License
MIT © [drumnation](https://github.com/drumnation/react-native-cross-responsive-dimensions)