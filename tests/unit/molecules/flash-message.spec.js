import { shallowMount } from '@vue/test-utils'
import FlashMessage from '@/components/molecules/FlashMessage'

const content = {
  type: 'error',
  msg: 'There is something wrong'
}

describe('FlashMessage.vue', () => {
  const wrapper = shallowMount(FlashMessage, {
    propsData: {
      messageType: content.type
    },
    slots: {
      default: content.msg
    }
  })
  it('has flash-message component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('it should render the message', () => {
    expect(wrapper.text()).toMatch(content.msg)
  })
})
