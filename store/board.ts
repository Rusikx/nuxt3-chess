import { defineStore } from 'pinia'
import { BoardPosition, BoardPositionLine } from '~/types/board'
import { Cell } from '~/types/cell'

interface State {
    initial: Cell[],
    active: Cell[],
    remember: BoardPosition,
    firstClick: boolean,
}

export const useBoardStore = defineStore({
  id: 'board-store',
  state: (): State => {
    return {
      initial: [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0]
      ],
      active: [
        [4, 3, 2, 5, 6, 2, 3, 4],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [4, 3, 2, 5, 6, 2, 3, 4]
      ],
      remember: { x: 0, y: 0 },
      firstClick: true
    }
  },
  actions: {
    setMove (value: BoardPositionLine) {
      if (this.active[value.a][value.b] !== 0) {
        this.active[value.x][value.y] = this.active[value.a][value.b]
        this.active[value.a][value.b] = 0
      }
    },
    setRemember (value: BoardPosition) {
      if (this.active[value.x][value.y] !== 0) {
        this.remember = value
      }
    },
    setFirstClick (value: boolean) {
      this.firstClick = value
    }
  },
  getters: {
    getInitial (): object {
      return this.initial
    },
    getActive (): object {
      return this.active
    },
    getRemember: state => state.remember,
    getFirstClick (): boolean {
      return this.firstClick
    }
  }
})
