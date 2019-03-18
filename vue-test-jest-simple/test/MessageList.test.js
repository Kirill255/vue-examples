import { mount, shallow } from 'vue-test-utils'
import MessageList from '../src/components/MessageList'

describe('MessageList.test.js', () => {
  let cmp
  let button

  beforeEach(() => {
    cmp = shallow(MessageList, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
    button = cmp.find('.button')
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('Assert cmp DOM node or vm matches selector', () => {
    expect(cmp.is('ul')).toBe(true)
  })

  // также легко проверить наличие других элементов
  it('имеет кнопку', () => {
    expect(cmp.contains('button')).toBe(true)
  })

  it('Текст кнопки', () => {
    expect(button.text()).toBe('Кнопка')
  })

  // it('Клик на кнопку добавляет в новый элемент props', () => {
  //   button.trigger('click', () => {
  //     cmp.setData({ messages: ['Cat', 'Dog'] })
  //   })
  //   expect(cmp.vm.messages).toEqual(['Cat', 'Dog'])
  // })

  // it('Повторный клик недобавляет ничего в props', () => {
  //   button.trigger('click')
  //   expect(cmp.vm.messages).toEqual(['Cat', 'Dog'])
  // })



  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})


// describe('Компонент MessageList', () => {
//   // Теперь монтируем компонент и получаем wrapper
//   // const wrapper = mount(MessageList)

//   it('отображает корректную разметку', () => {
//     expect(cmp.html()).toContain("<ul> <button>Кнопка</button></ul>")
//   })

//   it('Assert cmp DOM node or vm matches selector', () => {
//     expect(cmp.is('ul')).toBe(true)
//   })

//   // также легко проверить наличие других элементов
//   it('имеет кнопку', () => {
//     expect(cmp.contains('button')).toBe(true)
//   })
// })
