<template>
  <div>
    <PageHeader />
    <div class="mx-auto max-w-2xl px-3">
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
