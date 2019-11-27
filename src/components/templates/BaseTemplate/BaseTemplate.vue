<template>
  <div>
    <PageHeader />
    <div>
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
  }
}
</script>
