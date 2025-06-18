import{test, expect} from '@playwright/test'
import { clickByText, hoverByText } from '../util/helper'
import { baseUrl, locations } from '../util/urls'

test.describe('landing page', () => {
  test('login page test', async ({ page }) => {
    await page.goto(baseUrl)
    await page.isVisible("text='WHERE COFFEE MEETS COMMUNITY'")

    await hoverByText(page, 'LOCATIONS')
    await clickByText(page, 'ALL LOCATIONS')
    await expect(page).toHaveURL(new RegExp(`${locations}$`))
  })
})