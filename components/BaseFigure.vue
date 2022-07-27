<template>
  <div class="figure" @click="move">
    <img
        v-if="code"
        :src="`../../static/figures/${figureImage}`"
        alt=""
    />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardStore  } from '~~/store/board'
import { BoardPosition } from "~/types/board";
import { figures } from "~/configs/figures";

interface Props {
  code: number,
  position: BoardPosition,
}

export default {
  name: 'BaseFigure',
  setup(props: Props) {
    const board = useBoardStore() // state

    const { setMove, setRemember, setFirstClick } = board // actions
    const { remember, firstClick } = storeToRefs(board) // getters

    if (firstClick) {
      setRemember(
          props.position.x,
          props.position.y,
      )
    } else {
      setMove(
          props.position.x,
          props.position.y,
          remember.x,
          remember.y,
      )
    }

    setFirstClick(!firstClick)

    const figureImage = figures[props.code].url.white

    return { move, code: props.code, figureImage }
  },
}
</script>

<style scoped lang="scss">
.figure {
  width: 100%;
  height: 100%;
}
</style>
