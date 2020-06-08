# Basic Example for Automation Testing
This is an example for Automation Testing in React Native using Appium. <br />
React Native Version : 0.62 <br/>
Appium Version : 1.17.1

# How To Run
1. clone this repo
2. make sure you already have an appium dekstop app or you can install it from this link [appium](https://github.com/appium/appium-desktop/releases/tag/v1.13.0)
3. npm install
4. npm install appium-doctor -g
5. open your emulator
6. change your emulator name in [Test File](__tests__/myTests.test.js)
7. react-native start
8. react-native run-android, you need to run this command to generate your [Debug APK](android/app/build/outputs/apk/debug)
9. make sure the app-debug.apk has been generated in [Debug APK](android/app/build/outputs/apk/debug)
10. open [Test File](__tests__/myTests.test.js) and change your debug apk path, it should be in 'your_project_path/android/app/build/outputs/apk/debug/app-debug.apk'
10. make sure you add this __export JAVA_HOME=$(/usr/libexec/java_home)__ in your ~/.bashrc or ~/.bash_profile
11. open your appium and click start server
12. npm test

# Pluggin Installed
- wd (Web Driver) <br/>
(https://www.npmjs.com/package/wd)

# Source
- [React Native 0.60 UI Testing with Appium in 10 Easy Steps](https://medium.com/@mahmoudsnatch/react-native-0-60-ui-testing-with-appium-in-10-easy-steps-61e68ae6eb4c)
- [Setting up automation testing — Using React-Native (0.59) + Appium (1.13.0)](https://medium.com/swlh/automation-testing-using-react-native-and-appium-on-ubuntu-ddfddc0c29fe)