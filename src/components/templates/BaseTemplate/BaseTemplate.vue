<template>
  <div>
    <PageHeader />
    <div class="mx-auto max-w-lg px-3 mb-20">
      <h1 class="text-center text-2xl md:text-4xl mb-4 md:mb-8 text-gray-700">{{ title }}</h1>
      <slot></slot>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '@/components/organisms/PageFooter'
import PageHeader from '@/components/organisms/PageHeader'

export default {
  name: 'base-template',
  components: {
    PageFooter,
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
