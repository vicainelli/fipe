import { shallowMount } from '@vue/test-utils'
import CardVehicle from '@/components/molecules/CardVehicle'

const data = {
  name: 'Palio 1.0 ECONOMY Fire Flex 8V 4p',
  price: 'R$ 23055,00'
}
describe('CardVehicle.vue', () => {
  it('has a title with vehicle name', () => {
    const wrapper = shallowMount(CardVehicle, {
      propsData: { data }
    })

    let title = wrapper.find('h2')
    expect(title.text()).toBe(data.name)
  })
  it('has a price data', () => {
    const wrapper = shallowMount(CardVehicle, {
      propsData: { data }
    })
    let price = wrapper.find('strong')
    expect(price.text()).toBe(data.price)
  })
})
