<template>
  <div>
    <h2>{{ data.name }}</h2>
    <span>
      <strong>{{ data.price }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vehicle-title',
  props: {
    data: {
      type: Object,
      default: undefined
    }
  }
}
</script>
