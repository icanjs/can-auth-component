import Component from 'can-component'
import DefineMap from 'can-define/map/'
import view from './auth-container.stache'

export const ViewModel = DefineMap.extend({
  activeTab: {
    value: 'login',
    type: 'string'
  }
})

export default Component.extend({
  tag: 'auth-container',
  ViewModel,
  view
})
