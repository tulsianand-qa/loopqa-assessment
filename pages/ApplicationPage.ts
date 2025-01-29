import { Page, expect } from "@playwright/test";

let page:Page;
const column = '.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4'

/**
 * Function to select the project within the application
 * @param page 
 * @param projectName 
 */
export async function selectProject(page:Page, projectName: string){
    await page.getByRole("button", {name: projectName}).click();
    await expect(page.getByRole('banner').getByRole('heading', { name: projectName })).toBeVisible();  
}

/**
 * Function to get the elements that are specific to the ticket title
 * @param page 
 * @param columnName 
 * @param ticketName 
 * @returns 
 */
export async function getSelectCardElements(page: Page, columnName: string, ticketName: string) {
    return page.locator(column).filter({hasText: columnName}).filter({has: page.locator("h3",{hasText: ticketName})});
}