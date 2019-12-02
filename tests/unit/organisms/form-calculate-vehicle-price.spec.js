import { shallowMount } from '@vue/test-utils'
import FormCalculateVehiclePrice from '@/components/organisms/FormCalculateVehiclePrice'
import FlashMessage from '@/components/molecules/FlashMessage'

describe('FormCalculateVehiclePrice.vue', () => {
  const wrapper = shallowMount(FormCalculateVehiclePrice)

  it('has form-calculate-vehicle-price component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has no llash-message child component', () => {
    expect(wrapper.find(FlashMessage).exists()).toBe(false)
  })
})
