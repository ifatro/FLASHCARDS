import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('displays app title and welcome message', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'European Portuguese Flashcards' })).toBeVisible()
    await expect(page.getByText('Welcome! Choose how you want to practice.')).toBeVisible()
  })

  test('has navigation links to Study, Quiz, and Stats', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Study Mode' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Quiz Mode' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Stats Page' })).toBeVisible()
  })

  test('Study Mode link goes to category selection', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Study Mode' }).click()
    await expect(page).toHaveURL(/\/study$/)
    await expect(page.getByRole('heading', { name: /Study Mode — Choose Category/ })).toBeVisible()
  })

  test('Quiz Mode link goes to quiz category selection', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Quiz Mode' }).click()
    await expect(page).toHaveURL(/\/quiz$/)
    await expect(page.getByRole('heading', { name: /Quiz Mode — Choose Category/ })).toBeVisible()
  })

  test('Stats Page link goes to statistics page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Stats Page' }).click()
    await expect(page).toHaveURL(/\/stats/)
    await expect(page.getByRole('heading', { name: 'Statistics' })).toBeVisible()
  })
})
