<template>
  <div>
    <slot>{{ content.msg }}</slot>
  </div>
</template>

<script>
export default {
  name: 'flash-message',
  props: {
    content: {
      type: Object,
      default: undefined
    }
  }
}
</script>
