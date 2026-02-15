/**
 * Static flashcard data grouped by category.
 * European Portuguese vocabulary. Format: portuguese, english, category, quiz.
 */
export interface Flashcard {
  category: string
  portuguese: string
  english: string
  quiz: {
    type: 'multiple-choice'
    options: string[]
  }
}

export const CATEGORIES = ['animals', 'food', 'verbs'] as const
export type Category = (typeof CATEGORIES)[number]

export const flashcards: Flashcard[] = [
  // Animals
  {
    category: 'animals',
    portuguese: 'o gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the house', 'the cat', 'the bird'],
    },
  },
  {
    category: 'animals',
    portuguese: 'o cão',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the dog', 'the fish', 'the horse'],
    },
  },
  {
    category: 'animals',
    portuguese: 'o pássaro',
    english: 'the bird',
    quiz: {
      type: 'multiple-choice',
      options: ['the bird', 'the snake', 'the mouse', 'the cow'],
    },
  },
  {
    category: 'animals',
    portuguese: 'o cavalo',
    english: 'the horse',
    quiz: {
      type: 'multiple-choice',
      options: ['the pig', 'the horse', 'the goat', 'the sheep'],
    },
  },
  // Food
  {
    category: 'food',
    portuguese: 'a maçã',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the orange', 'the apple', 'the banana', 'the grape'],
    },
  },
  {
    category: 'food',
    portuguese: 'o pão',
    english: 'the bread',
    quiz: {
      type: 'multiple-choice',
      options: ['the bread', 'the water', 'the milk', 'the cheese'],
    },
  },
  {
    category: 'food',
    portuguese: 'o leite',
    english: 'the milk',
    quiz: {
      type: 'multiple-choice',
      options: ['the milk', 'the coffee', 'the tea', 'the juice'],
    },
  },
  {
    category: 'food',
    portuguese: 'a água',
    english: 'the water',
    quiz: {
      type: 'multiple-choice',
      options: ['the water', 'the wine', 'the beer', 'the soda'],
    },
  },
  // Verbs
  {
    category: 'verbs',
    portuguese: 'comer',
    english: 'to eat',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to eat', 'to run', 'to sleep'],
    },
  },
  {
    category: 'verbs',
    portuguese: 'beber',
    english: 'to drink',
    quiz: {
      type: 'multiple-choice',
      options: ['to eat', 'to drink', 'to read', 'to write'],
    },
  },
  {
    category: 'verbs',
    portuguese: 'dormir',
    english: 'to sleep',
    quiz: {
      type: 'multiple-choice',
      options: ['to sleep', 'to wake', 'to walk', 'to sit'],
    },
  },
  {
    category: 'verbs',
    portuguese: 'falar',
    english: 'to speak',
    quiz: {
      type: 'multiple-choice',
      options: ['to speak', 'to listen', 'to think', 'to know'],
    },
  },
]

export function getCardsByCategory(category: Category): Flashcard[] {
  return flashcards.filter((c) => c.category === category)
}
