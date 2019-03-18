import { shallow } from 'vue-test-utils'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(App, { // Create a shallow instance of the component
      // data: {
      //   messages: ['Cat']
      // }
      // вот ещё нашёл в гугле что сдесь data должна быть функцией, но всё ровно не работает, работает только .setData()
      // data() {
      //   return {
      //     messages: ['Cat']
      //   }
      // }
    })
    //елси задаю data в экзэмпляре, то выпадает не ошибка(тест проходит!), а просто предупреждение [Vue warn]: Do not use built-in or reserved HTML elements as component id: data, в гугле нашёл https://stackoverflow.com/questions/48953700/how-do-you-set-the-data-values-in-a-component-with-vue-test-utils-before-mounted , если задать data через .setData(), то предупреждение пропадает, пока не знаю критично это или нет
    cmp.setData({ messages: ['Cat'] })
  })


  it('equals messages to ["Cat"]', () => {
    // Within cmp.vm, we can access all Vue instance methods
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
