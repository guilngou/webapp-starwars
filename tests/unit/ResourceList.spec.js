import { mount } from '@vue/test-utils'
import ResourceList from '@/components/ResourceList.vue'

describe('ResourceList.vue', () => {
  it('renders component', () => {
    const wrapper = mount(ResourceList)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has initial count of 0', () => {
    const wrapper = mount(ResourceList)
    expect(wrapper.vm.count).toEqual(0)
  })
})
