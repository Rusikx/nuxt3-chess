<template>
  <div
      class="cell"
      :class="{'cell--white': isWhite, 'cell--black': !isWhite}"
  >
    <BaseFigure :code="figure" :position="position" />
  </div>
</template>
<script>
import BaseFigure from '~/components/atoms/BaseFigure'

export default {
  name: 'TheCell',
  components: {
    BaseFigure,
  },
  props: {
    position: {
      type: Object,
      required: true,
    },
    isWhite: {
      type: Boolean,
      required: true,
    },
    figure: {
      type: Number,
      required: false,
    },
  },
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
