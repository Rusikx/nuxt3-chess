import { setActivePinia, createPinia } from 'pinia'
import { describe, test, expect, beforeAll, afterEach, beforeEach } from 'vitest'
import { useBoardStore } from '~/store/board'
import { boardActive, boardInitial, initialRemember } from '~/configs/initialValues'

beforeAll(() => {
  setActivePinia(createPinia())
})

describe('Use Board Store', () => {
  let store: ReturnType<typeof useBoardStore>

  beforeEach(() => {
    store = useBoardStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('creates a store', () => {
    expect(store).toBeDefined()
  })

  test('init the store', () => {
    expect(store.initial).toStrictEqual(boardInitial)
    expect(store.active).toStrictEqual(boardActive)
    expect(store.remember).toStrictEqual(initialRemember)
  })

  test('set move', () => {
    const testValue = { x: 2, y: 5, a: 1, b: 5 }
    const swappedValue = store.active[testValue.a][testValue.b]

    store.setMove(testValue)

    expect(store.active[testValue.x][testValue.y]).toStrictEqual(swappedValue)
    expect(store.active[testValue.a][testValue.b]).toStrictEqual(0)
    expect(store.remember).toStrictEqual(initialRemember)
  })

  test('set remember', () => {
    const testValue = { x: 6, y: 7 }

    store.setRemember(testValue)

    expect(store.remember).toStrictEqual(testValue)
  })
})
