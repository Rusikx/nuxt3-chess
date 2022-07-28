<template>
  <div class="figure" @click="clickMove">
    <img
      v-if="code && figureImage"
      :src="`../../static/figures/${figureImage}`"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { BoardPosition } from '~/types/board'
import { useBoardStore } from '~~/store/board'
import { figures } from '~/configs/figures'

interface Props {
  code: number,
  position: BoardPosition,
}

export default {
  name: 'BaseFigure',
  props: {
    code: Number,
    position: Object
  },
  setup (props: Props) {
    const board = useBoardStore() // state

    const { setMove, setRemember, setFirstClick } = board // actions
    const { getRemember, getFirstClick } = storeToRefs(board) // getters

    if (getFirstClick) {
      setRemember(
        {
          x: props.position.x,
          y: props.position.y
        }
      )
    } else {
      setMove(
        {
          x: props.position.x,
          y: props.position.y,
          a: getRemember.value.x,
          b: getRemember.value.y
        }
      )
    }

    setFirstClick(!getFirstClick)

    const figureImage = figures.find(s => s.index === props.code)?.image.white

    const clickMove = () => setMove({
      x: props.position.x,
      y: props.position.y,
      a: getRemember.value.x,
      b: getRemember.value.y
    })

    // eslint-disable-next-line vue/no-dupe-keys
    return { clickMove, code: props.code, figureImage }
  }
}
</script>

<style lang="scss" scoped>
.figure {
  width: 100%;
  height: 100%;
}
</style>
