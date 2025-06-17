import { Page } from '@playwright/test';


const clickButton = async (page: Page, buttonName: string) => {
  await page.getByRole('button', { name: buttonName }).click()
}

const clickButtonByTestId = async (page: Page, testId: string) => {
    await page.getByTestId(testId).click();
};

const hoverByText = async (page: Page, buttonText: string) => {
  await page.waitForTimeout(5000)
  await page.getByText(buttonText).nth(0).hover();
}

const clickByText = async (page: Page, buttonText: string) => {
  await page.getByText(buttonText).nth(0).click();
}

const typeIntoFieldByTestId = async (page: Page, testId: string, text: string) => {
    await page.getByTestId(testId).fill(text);
}


export { 
  clickButton, 
  clickButtonByTestId,
  hoverByText,
  clickByText,
  typeIntoFieldByTestId
 }