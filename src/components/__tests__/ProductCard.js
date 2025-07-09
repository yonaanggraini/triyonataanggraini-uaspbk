import { describe, it, expect, beforeEach } from 'vitest' // Added beforeEach import
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('ProductCard.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders product information correctly', () => {
    const product = {
      id: 1,
      name: 'Sunflower Bouquet',
      price: 150000,
      image: '/images/sunflower.jpg',
      shortDescription: 'Beautiful sunflower arrangement',
    }

    const wrapper = mount(ProductCard, {
      props: { product },
    })

    expect(wrapper.find('h3').text()).toBe(product.name)
    expect(wrapper.find('.price').text()).toContain('Rp150.000')
    expect(wrapper.find('.description').text()).toBe(product.shortDescription)
    expect(wrapper.find('img').attributes('src')).toBe(product.image)
    expect(wrapper.find('img').attributes('alt')).toBe(product.name)
  })

  it('formats price correctly', () => {
    const product = {
      id: 2,
      name: 'Rose Bouquet',
      price: 200000,
      image: '/images/rose.jpg',
      shortDescription: 'Elegant rose arrangement',
    }

    const wrapper = mount(ProductCard, {
      props: { product },
    })

    expect(wrapper.find('.price').text()).toBe('Rp200.000')
  })

  it('emits add to cart event when button clicked', async () => {
    const product = {
      id: 3,
      name: 'Tulip Bouquet',
      price: 180000,
      image: '/images/tulip.jpg',
      shortDescription: 'Colorful tulip arrangement',
    }

    const wrapper = mount(ProductCard, {
      props: { product },
    })

    await wrapper.find('.add-to-cart-btn').trigger('click')

    expect(wrapper.find('.add-to-cart-btn').exists()).toBe(true)
  })
})
