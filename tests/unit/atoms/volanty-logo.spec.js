import { shallowMount } from '@vue/test-utils'
import VolantyLogo from '@/components/atoms/VolantyLogo'

const data = {
  src: '@/assets/images/logo.svg',
  alt: 'Logo Volanty'
}

describe('VolantyLogo.vue', () => {
  const wrapper = shallowMount(VolantyLogo)
  it('has volanty-logo component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has img tag with volanty logo file', () => {
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('has ./assets/logo.svg in src attr', () => {
    expect(wrapper.find('img').attributes('src')).toEqual(data.src)
  })

  it('has Logo Volanty in alt attr', () => {
    expect(wrapper.find('img').attributes('alt')).toEqual(data.alt)
  })
})
