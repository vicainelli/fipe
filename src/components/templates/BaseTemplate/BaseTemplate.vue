<template>
  <div>
    <PageHeader />
    <div>
      <h1>{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/organisms/PageHeader'

export default {
  name: 'base-template',
  components: {
    PageHeader
  },
  props: {
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>
