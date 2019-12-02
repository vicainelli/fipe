import { shallowMount } from '@vue/test-utils'
import FlashMessage from '@/components/molecules/FlashMessage'

const content = {
  type: 'error',
  msg: 'There is something wrong'
}

describe('FlashMessage.vue', () => {
  const wrapper = shallowMount(FlashMessage, {
    propsData: {
      content
    }
  })
  it('has flash-message component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('it should render the message', () => {
    expect(wrapper.text()).toMatch(content.msg)
  })
})
