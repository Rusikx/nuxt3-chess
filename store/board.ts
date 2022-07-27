import { defineStore } from 'pinia'
import { BoardPosition, BoardPositionLine } from "~/types/board";
import { Cell } from "~/types/cell";

interface State {
    default: Cell[],
    active: Cell[],
    remember: BoardPosition,
    firstClick: boolean,
}

export const useBoardStore = defineStore({
    id: 'board-store',
    state: (): State => {
        return {
            default: [
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
                [3, 2, 4, 5, 6, 4, 2, 3],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [3, 2, 4, 6, 5, 4, 2, 3],
            ],
            remember: {x: 0, y: 0},
            firstClick: true,
        }
    },
    actions: {
        // setMove(value: BoardPositionLine) {
        //     this.active[value.x][value.y] = this.active[value.a][value.b]
        // },
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
        default: (state) => state.default,
        active: (state) => state.active,
        remember: (state) => state.remember,
        firstClick: (state) => state.firstClick,
    }
})
