import { defineStore } from 'pinia'
import { BoardPosition, BoardPositionLine } from "~/types/board";
import { Cell } from "~/types/cell";

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
                [1, 0, 1, 0, 1, 0, 1, 0],
            ],
            active: [
                [4, 3, 2, 5, 6, 2, 3, 4],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [4, 3, 2, 5, 6, 2, 3, 4],
            ],
            remember: {x: 0, y: 0},
            firstClick: true,
        }
    },
    actions: {
        setMove(value: BoardPositionLine) {
            const duplicate = JSON.parse(JSON.stringify(this.active))
            duplicate[value.x][value.y] = duplicate[value.a][value.b]
            duplicate[value.a][value.b] = 0

            this.active = duplicate
        },
        setRemember(value: BoardPosition) {
            this.remember = value
        },
        setFirstClick(value: Boolean) {
            this.firstClick = value
        },
    },
    getters: {
        getInitial: (state) => state.initial,
        getActive: (state) => state.active,
        getRemember: (state) => state.remember,
        getFirstClick: (state) => state.firstClick,
    }
})
