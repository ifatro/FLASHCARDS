import { test, expect } from '@playwright/test'

test.describe('Study session', () => {
  test('shows first card with Portuguese word by default', async ({ page }) => {
    await page.goto('/study/animals')
    await expect(page.getByText('Card 1 of')).toBeVisible()
    await expect(page.getByText('o gato')).toBeVisible()
  })

  test('flipping card reveals English and Right/Wrong buttons', async ({ page }) => {
    await page.goto('/study/animals')
    await expect(page.getByText('o gato')).toBeVisible()
    await expect(page.getByRole('button', { name: 'I got it right' })).not.toBeVisible()

    await page.getByTestId('flashcard-flip').click()

    await expect(page.getByText('the cat')).toBeVisible()
    await expect(page.getByRole('button', { name: 'I got it right' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'I got it wrong' })).toBeVisible()
  })

  test('clicking Right advances to next card', async ({ page }) => {
    await page.goto('/study/animals')
    await expect(page.getByText('o gato')).toBeVisible()
    await page.getByTestId('flashcard-flip').click()
    await page.getByTestId('flashcard-right').click()

    await expect(page.getByText('Card 2 of')).toBeVisible()
    await expect(page.getByText('o cão')).toBeVisible()
  })

  test('clicking Wrong advances to next card and tracks wrong answer', async ({ page }) => {
    await page.goto('/study/animals')
    await page.getByTestId('flashcard-flip').click()
    await page.getByTestId('flashcard-wrong').click()

    await expect(page.getByText('Card 2 of')).toBeVisible()
  })

  test('completing all cards shows session complete screen', async ({ page }) => {
    await page.goto('/study/animals')
    const animals = ['o gato', 'o cão', 'o pássaro', 'o cavalo']
    for (let i = 0; i < 4; i++) {
      await expect(page.getByText(`Card ${i + 1} of 4`)).toBeVisible()
      await expect(page.getByText(animals[i])).toBeVisible()
      await page.getByTestId('flashcard-flip').click()
      await expect(page.getByTestId('flashcard-right')).toBeVisible()
      await page.getByTestId('flashcard-right').click()
    }

    await expect(page.getByRole('heading', { name: 'Session complete' })).toBeVisible()
    await expect(page.getByText(/You reviewed 4 cards/)).toBeVisible()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
  })

  test('wrong answers are reflected in session complete message', async ({ page }) => {
    await page.goto('/study/animals')
    await expect(page.getByText('o gato')).toBeVisible()
    await page.getByTestId('flashcard-flip').click()
    await expect(page.getByTestId('flashcard-wrong')).toBeVisible()
    await page.getByTestId('flashcard-wrong').click()
    const animals = ['o cão', 'o pássaro', 'o cavalo']
    for (let i = 0; i < 3; i++) {
      await expect(page.getByText(`Card ${i + 2} of 4`)).toBeVisible()
      await expect(page.getByText(animals[i])).toBeVisible()
      await page.getByTestId('flashcard-flip').click()
      await expect(page.getByTestId('flashcard-right')).toBeVisible()
      await page.getByTestId('flashcard-right').click()
    }

    await expect(page.getByRole('heading', { name: 'Session complete' })).toBeVisible()
    await expect(page.getByText(/1 marked as wrong/)).toBeVisible()
  })

  test('back link returns to category selection', async ({ page }) => {
    await page.goto('/study/animals')
    await page.getByRole('link', { name: '← Back to category selection' }).click()
    await expect(page).toHaveURL(/\/study$/)
  })
})
