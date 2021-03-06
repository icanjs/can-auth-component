import Component from 'can-component'
import FormBaseViewModel from '../form-base-vm'
import view from './login.stache'
import '../forms.less'

export const ViewModel = FormBaseViewModel.extend({
  /**
   * `formName` is only used for logging.
   */
  formName: {
    value: 'LoginForm'
  },

  /**
   * `forgotClicked` is the handler for the form submit. It calls `onForgot`
   * with the auth data.
   */
  forgotClicked (event) {
    event.preventDefault()
    this.onForgot(this.username, this.password)
  },

  /**
   * `handleForgot` is the function that gets run with the "forgot password" link is clicked.
   */
  onForgot () {
    this.warn(`Pass an "onForgot" function to the ${this.formName} to handle "forgot password" clicks.`)
  },

  /**
   * `buttonText` is the action text inside the main button.
   */
  buttonText: {
    value: 'Login'
  }
})

export default Component.extend({
  tag: 'login-form',
  ViewModel,
  view
})
