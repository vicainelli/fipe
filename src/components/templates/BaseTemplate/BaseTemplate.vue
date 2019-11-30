<template>
  <div>
    <PageHeader />
    <div class="mx-auto max-w-lg px-3">
      <h1 class="text-center text-2xl md:text-4xl mb-4 md:mb-8 text-gray-700">{{ title }}</h1>
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
