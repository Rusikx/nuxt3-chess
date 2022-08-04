import { defineStore } from 'pinia'
import { BoardPosition, BoardPositionLine } from '~/types/board'
import { Cell } from '~/types/cell'
import { boardActive, boardInitial, initialRemember } from '~/configs/initialValues'

interface State {
    initial: Cell[],
    active: Cell[],
    remember: BoardPosition,
}

export const useBoardStore = defineStore({
  id: 'board-store',
  state: (): State => {
    return {
      initial: [...boardInitial],
      active: [...boardActive],
      remember: { ...initialRemember }
    }
  },
  actions: {
    setMove (value: BoardPositionLine) {
      if (this.active[value.a][value.b] !== 0) {
        this.active[value.x][value.y] = this.active[value.a][value.b]
        this.active[value.a][value.b] = 0
        this.remember = { x: 0, y: 0 }
      }
    },
    setRemember (value: BoardPosition) {
      if (this.active[value.x][value.y] !== 0) {
        this.remember = value
      }
    }
  },
  getters: {
    getInitial (): object {
      return this.initial
    },
    getActive (): object {
      return this.active
    },
    getRemember (): object {
      return this.remember
    }
  }
})
