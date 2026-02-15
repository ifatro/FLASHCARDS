import { test, expect } from '@playwright/test'

test.describe('Category selection', () => {
  test('study category selection lists Animals, Food, Verbs', async ({ page }) => {
    await page.goto('/study')
    await expect(page.getByRole('link', { name: 'Animals' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Food' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Verbs' })).toBeVisible()
  })

  test('clicking Animals from study goes to study session for animals', async ({ page }) => {
    await page.goto('/study')
    await page.getByRole('link', { name: 'Animals' }).click()
    await expect(page).toHaveURL(/\/study\/animals/)
  })

  test('quiz category selection lists all categories', async ({ page }) => {
    await page.goto('/quiz')
    await expect(page.getByRole('link', { name: 'Animals' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Food' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Verbs' })).toBeVisible()
  })

  test('clicking a category from quiz goes to quiz session', async ({ page }) => {
    await page.goto('/quiz')
    await page.getByRole('link', { name: 'Food' }).click()
    await expect(page).toHaveURL(/\/quiz\/food/)
  })

  test('back link from study category selection goes to home', async ({ page }) => {
    await page.goto('/study')
    await page.getByRole('link', { name: '← Home' }).click()
    await expect(page).toHaveURL('/')
  })
})
