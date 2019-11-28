<template>
  <BaseTemplate title="Quanto vale meu carro?">
    <FormCalculateVehiclePrice />
  </BaseTemplate>
</template>

<script>
import BaseTemplate from '@/components/templates/BaseTemplate'
import FormCalculateVehiclePrice from '@/components/organisms/FormCalculateVehiclePrice'

export default {
  name: 'page-home',
  components: {
    BaseTemplate,
    FormCalculateVehiclePrice
  }
}
</script>
