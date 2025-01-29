import { test, expect, Page } from '@playwright/test';
import {login} from '../pages/LoginPage'
import { getSelectCardElements, selectProject } from '../pages/ApplicationPage';
const testData = JSON.parse(JSON.stringify(require("../testData.json")));

test.describe("Test cases to verify the status and tags of tickets for a logged in user", async() => {
  testData.tests.forEach(testCase => {
    test(testCase.testCaseNumber, async({page}) => {
      await login(page);
      await selectProject(page,testCase.projectName);

      /*Verification of the ticket existing in the correct column */
      const columnElements = await getSelectCardElements(page, testCase.columnName, testCase.ticketName)
      await expect(columnElements).toBeVisible() 
      
      /*Verification of the tags names in the selected ticket */
      testCase.tagNames.forEach(tag => async() => {
        const tagElements = columnElements.filter({hasText: tag});
      await expect(tagElements).toBeVisible()
      });
    })
  }) 
})

 

