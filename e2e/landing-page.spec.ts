import{test, expect} from '@playwright/test'
import { clickButton, clickButtonByTestId, typeIntoFieldByTestId } from '../util/helper'

test.describe('landing page', () => {
  test('login page test', async ({ page }) => {
    await page.goto('https://www.doordash.com/')
    await page.isVisible("text='Verifying you are human. This may take a few seconds.'")
    await expect(page.getByText('$0 DELIVERY FEE ON FIRST ORDER')).toBeVisible({ timeout: 10000 });

    await clickButtonByTestId(page, 'identityLastLoginButton')
    await clickButtonByTestId(page, 'fieldWrapper-:rf:')

    await typeIntoFieldByTestId(page, 'fieldWrapper-:rf:', 'dmt.b@yahoo.com')


  })
})