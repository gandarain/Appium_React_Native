/* eslint-disable no-undef */
import wd from 'wd'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
const PORT = 4723
const config = {
  platformName: 'Android',
  deviceName: 'Pixel 3a XL API 29',
  app: '/Users/gandahalojasa/Documents/Project/Learn/Appium_React_Native/android/app/build/outputs/apk/debug/app-debug.apk'
}
const driver = wd.promiseChainRemote('localhost', PORT)

beforeAll(async () => {
  await driver.init(config)
  await driver.sleep(4000)
}) // Sometime for the app to load

test('login screen test', async () => {
  expect(await driver.hasElementByAccessibilityId('fieldEmail')).toBe(true)
  await driver.elementByAccessibilityId('fieldEmail').type('gandarainpanjaitan@gmail.com')
  expect(await driver.hasElementByAccessibilityId('buttonLogin')).toBe(true)
  const element = await driver.elementByAccessibilityId('buttonLogin')
  await element.click()

  await driver.sleep(1000)
  expect(await driver.hasElementByAccessibilityId('buttonHome')).toBe(true)
  const element2 = await driver.elementByAccessibilityId('buttonHome')
  await element2.click()
})