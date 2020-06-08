/* eslint-disable no-undef */
import wd from 'wd'
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
const PORT = 4723
const config = {
  platformName: 'Android',
  deviceName: 'Pixel XL API 29',
  app: '/Users/gandahalojasa/Documents/Project/Learn/AutomationTesting/android/app/build/outputs/apk/debug/app-debug.apk'
}
const driver = wd.promiseChainRemote('localhost', PORT)

beforeAll(async () => {
  await driver.init(config)
  await driver.sleep(3000)
}) // Sometime for the app to load
test('my first appium test', async () => {
  expect(await driver.hasElementByAccessibilityId('fieldEmail')).toBe(true)
  await driver.elementByAccessibilityId('fieldEmail').type('gandarainpanjaitan@gmail.com')
  expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true)
  const element = await driver.elementByAccessibilityId('alertButton')
  await element.click()
  expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false)
})