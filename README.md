# Basic Example for Automation Testing
This is an example for Automation Testing in React Native using Appium.

# How To Run
1. make sure you already have an appium dekstop app or you can install it from this link [appium](https://github.com/appium/appium-desktop/releases/tag/v1.13.0)
2. npm install
3. npm install appium-doctor -g
4. open your emulator
5. change your emulator name in [Test File](__tests__/myTests.test.js)
6. react-native start
7. react-native run-android
8. make sure app-debug.apk has been generated in /your_project_path/android/app/build/outputs/apk/debug/app-debug.apk
9. make sure you add this export JAVA_HOME=$(/usr/libexec/java_home) in your ~/.bashrc or ~/.bash_profile
11. open your appium and click start server
10. npm test

# Pluggin Installed
- wd <br/>
(https://www.npmjs.com/package/wd)

# Source
- [React Native 0.60 UI Testing with Appium in 10 Easy Steps](https://medium.com/@mahmoudsnatch/react-native-0-60-ui-testing-with-appium-in-10-easy-steps-61e68ae6eb4c)
- [Setting up automation testing — Using React-Native (0.59) + Appium (1.13.0)](https://medium.com/swlh/automation-testing-using-react-native-and-appium-on-ubuntu-ddfddc0c29fe)