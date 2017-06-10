import Component from 'can-component'
import DefineMap from 'can-define/map/'
import view from './tabs.stache'
import './tabs.less'

export const ViewModel = DefineMap.extend({
  activeTab: {
    type: 'string'
  },

  tabClicked (tab) {
    this.activeTab = tab
  }
})

export default Component.extend({
  tag: 'route-tabs',
  ViewModel,
  view
})
