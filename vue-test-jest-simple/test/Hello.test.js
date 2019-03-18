// вроде, пока точно не уверен, библиотека немного изменилась
// теперь shallowMount вместо shallow
// теперь import { shallowMount } from '@vue/test-utils' вместо import { shallow } from 'vue-test-utils'
// или наоборот ну и некоторые другие методы тоже изменилсь, надо почитать доку и https://github.com/vuejs/vue-test-utils/releases

import { shallow } from 'vue-test-utils'
import Hello from '../src/components/Hello'

const factory = (values = {}) => {
  return shallow(Hello, {
    data: { ...values }
  })
}

describe('Hello', () => {
  it('отрисовывает приветственное сообщение', () => {
    const wrapper = factory()

    expect(wrapper.find('.message').text()).toEqual('Добро пожаловать в книгу рецептов Vue.js')
  })

  it('отрисовывает ошибку, когда имя пользователя меньше 7 символов', () => {
    const wrapper = factory({ username: '' })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('отрисовывает ошибку, когда имя пользователя состоит только из пробелов', () => {
    const wrapper = factory({ username: ' '.repeat(7) })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('не отрисовывает ошибку, когда имя пользователя равно 7 символам или более', () => {
    const wrapper = factory({ username: 'Александр' })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
