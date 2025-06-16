import { Page } from '@playwright/test';


const clickButton = async (buttonName: string) => {
  await page.getByRole('button', { name: buttonName }).click()
}

const clickButtonByTestId = async (page: Page, testId: string) => {
    await page.getByTestId(testId).click();
};

const typeIntoFieldByTestId = async (page: Page, testId: string, text: string) => {
    await page.getByTestId(testId).fill(text);
}


export { 
  clickButton, 
  clickButtonByTestId,
  typeIntoFieldByTestId
 }