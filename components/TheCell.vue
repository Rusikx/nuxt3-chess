<template>
  <div
    class="cell"
    :class="{'cell--white': isWhite, 'cell--black': !isWhite}"
    @click="clickMove"
  >
    <BaseFigure v-if="figure" :code="figure" :position="position" />
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import BaseFigure from '~/components/BaseFigure.vue'
import { BoardPosition } from '~/types/board'
import { useBoardStore } from '~/store/board'

interface Props {
  position: BoardPosition,
  figure: number,
  isWhite: boolean,
}

export default {
  name: 'TheCell',
  components: { BaseFigure },
  props: {
    position: Object,
    figure: Number,
    isWhite: Boolean
  },
  setup (props: Props) {
    const board = useBoardStore() // state

    const { setMove, setRemember } = board // actions
    const { getRemember } = storeToRefs(board) // getters

    const clickMove = () => {
      if (getRemember.value.x && getRemember.value.y) {
        setMove(
          {
            x: props.position.x,
            y: props.position.y,
            a: getRemember.value.x,
            b: getRemember.value.y
          }
        )
      } else {
        setRemember(
          {
            x: props.position.x,
            y: props.position.y
          }
        )
      }
    }

    return { props, clickMove }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: block;
  width: 10vh;
  height: 10vh;

  &--white {
    background-color: white;
  }

  &--black {
    background-color: cornflowerblue;
  }
}
</style>
