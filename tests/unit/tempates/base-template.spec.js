import { shallowMount } from '@vue/test-utils'
import BaseTemplate from '@/components/templates/BaseTemplate'
import PageHeader from '@/components/organisms/PageHeader'

const title = ''

describe('BaseTemplate.vue', () => {
  const wrapper = shallowMount(BaseTemplate, {
    propsData: {
      title
    }
  })
  it('has base-template component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has page-header child component', () => {
    expect(wrapper.find(PageHeader).exists()).toBe(true)
  })

  it('has a h1 tag with title value', () => {
    let pageTitle = wrapper.find('h1')
    expect(pageTitle.text()).toBe(title)
  })
})
