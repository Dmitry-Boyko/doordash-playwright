import{test, expect} from '@playwright/test'
import { clickByText, hoverByText } from '../util/helper'

test.describe('landing page', () => {
  test('login page test', async ({ page }) => {
    await page.goto('https://www.foxtailcoffee.com/')
    await page.isVisible("text='WHERE COFFEE MEETS COMMUNITY'")

    await hoverByText(page, 'LOCATIONS')
    await clickByText(page, 'ALL LOCATIONS')

  })
})