# can-auth-component

[![Build Status](https://travis-ci.org/icanjs/can-auth-component.png?branch=master)](https://travis-ci.org/icanjs/can-auth-component)

Compose a clean Auth UI with these simple React components.

There is also a matching React version: https://github.com/icanjs/auth-component

![can-auth-component example](https://cloud.githubusercontent.com/assets/128857/21478355/da76f80a-cb07-11e6-8a6d-dc382d30bf9f.jpg)

## Example Usage

`can-auth-component` is a collection of components.  They can be composed based on the auth requirements of your application.  The main demo shows how to build the example shown in the image above.  To run the demo, start an `http-server` in the root and open [http://localhost:8080](http://localhost:8080).  Here's the [demo code](https://github.com/icanjs/can-auth-component/blob/master/src/auth-demo.html).

```jsx
<auth-container>
	<route-tabs active-tab={route.data.page} route-attr='page' />

	<div class='auth-branding'>
		{{{logo}}}
	</div>

	<div class='oauth-buttons'>
		<facebook-auth-button popup='true' />
		<github-auth-button popup='true' />
		<google-auth-button popup='true' />
		<microsoft-auth-button popup='true' />
		<twitter-auth-button popup='true' />
	</div>

	<Route data={{page: 'login'}} component={LoginForm} />
	<Route data={{page: 'signup'}} component={SignupForm} />
</auth-container>
```

## auth-container

The `<auth-container></auth-container>` component is a set a styles that center a white login container both vertically and horizontally inside its parent element.  It has no viewModel logic of its own, so all of the other components will work without it.

```handlebars
<can-import from="can-auth-component/auth-container/auth-container" />

<auth-container>
	Put whatever markup you want inside here.
</auth-container>
```

## Forms

A basic Login and Signup form are included. Here are four examples for using either the `<signup-form>` or `<login-form>`:

```handlebars
<can-import from="can-auth-component/forms/signup/signup" />
// You can use LoginForm in any of the below examples.
<can-import from="can-auth-component/forms/login/login" />

<h2>Signup - React Standalone</h2>
<signup-form handleSubmit={(authData) => Promise.resolve(authData)} />

<h2>Signup - Feathers Service</h2>
<signup-form service={dummyService} onSuccess={handleSuccess} />

<h2>Signup - Can-Connect Model</h2>
<signup-form Model={DummyModel}
	onSuccess={handleSuccess}
	usernameField='username'
	usernamePlaceholder='username' />

<h2>Signup - Error</h2>
<signup-form Model={DummyModel}
	handleSubmit={() => Promise.reject('Invalid everything! No soup for you!')}
	onSuccess={handleSuccess}
	onError={error => { console.error(error); }} />
```

Many of the viewModel attributes are the same, so they share a [common base viewModel](https://github.com/icanjs/can-auth-component/blob/master/src/forms/form-base-vm.js).  The following attributes are available in both forms:

- `usernameField` {String} Allows you to customize one of the attributes sent to the server. It's set to `"email"` by default.
- `usernamePlaceholder` {String} Set the placeholder text for the `usernameField`.  Default is `"e-mail address"`.
- `passwordField` {String} Allows you to customize an attribute sent to the server.  The default is `"password"`.
- `passwordPlaceholder` {String} Set the placeholder text for the `passwordField`.  Default is `"password"`.
- `model` {can-connect Model} a can-connect compatible Model to use for submitting the form data.
- `service` {FeathersJS service} a Feathers service to use for submitting the form data.
- `suppressWarnings` {Boolean} There are a few warnings that will show up by default. Turn them off by setting `suppressWarnings` to true.  Default `false`.
- `handleSubmit` {Function} is called when the form is submitted.  If a `Model` or `service` was provided, it will be used to communicate with the server.  If not, `handleSubmit` must be overwritten with your own logic.  It must return a `Promise`.
- `onSuccess` {Function} a function that runs when the server returns a success response.
- `onError` {Function} a function that runs when the server returns an error response.

These are the custom attributes for the `<login-form>`:
- `buttonText` {String} Set the main action button's label.  Default is `"Login"`.
- `onForgot` {Function} runs when the user clicks the "Forgot Password" link. There is no default handler for this, so you have to provide your own function.

These are the custom attributes for the `<signup-form>`:
- `buttonText` {String} Set the main action button's label.  Default is `"Sign up"`.

There are two form demos included.  Start an http-server in the root and open [http://localhost:8080/src/forms/login-demo.html](http://localhost:8080/src/forms/login-demo.html) and [http://localhost:8080/src/forms/signup-demo.html](http://localhost:8080/src/forms/signup-demo.html).  Both demos include examples for using a `model`, `service`, or custom function.

## Buttons

A Generic button and a bunch of ready-to-use buttons are included.  There is a buttons demo included.  Start an http-server in the root, and check out [http://localhost:8080/src/buttons/buttons-demo.html](http://localhost:8080/src/buttons/buttons-demo.html).

### Generic Auth Button

The `<auth-button />` is the base for all of the other buttons.  You can use it to make your own auth buttons.  Here's how the Facebook button implements the generic button:

```handlebars
<can-import from="can-auth-component/buttons/button" />
<can-import from="./facebook.less" />

<auth-button {name}="name"
  {url}="url"
  {svg}="svg"
  {alt}="alt"
  {text}="text"
  {popup}="popup"
/>
```

- `url` is like specifying the `href` on a link. The default value matches FeathersJS default OAuth URLs like `/auth/<providerName>`.  For example, the Facebook button uses `/auth/facebook`.
- `popup`, if truthy, simply opens the `url` in a centered popup window.
- `alt` is for alt text, the same as on other HTML elements.
- `text` allows you to specify some text to the right of the image.
- `svg` allows you to embed svg directly into the button.
- `img` is supported in place of `svg`.  The `img` attribute should the the URL to an image.

### Ready-to-use Buttons

A bunch of pre-styled buttons are included.  They all extend the generic button.

```js
<can-import from="auth-component/buttons/amazon/amazon" />
<amazon-auth-button />

<can-import from="auth-component/buttons/dropbox/dropbox" />
<dropbox-auth-button />

<can-import from="auth-component/buttons/evernote/evernote" />
<evernote-auth-button />

<can-import from="auth-component/buttons/facebook/facebook" />
<facebook-auth-button />

<can-import from="auth-component/buttons/github/github" />
<github-auth-button />

<can-import from="auth-component/buttons/google/google" />
<google-auth-button />

<can-import from="auth-component/buttons/linkedin/linkedin" />
<linkedin-auth-button />

<can-import from="auth-component/buttons/microsoft/microsoft" />
<microsoft-auth-button />

<can-import from="auth-component/buttons/openid/openid" />
<openid-auth-button />

<can-import from="auth-component/buttons/paypal/paypal" />
<paypal-auth-button />

<can-import from="auth-component/buttons/skype/skype" />
<skype-auth-button />

<can-import from="auth-component/buttons/slack/slack" />
<slack-auth-button />

<can-import from="auth-component/buttons/stackoverflow/stackoverflow" />
<stackoverflow-auth-button />

<can-import from="auth-component/buttons/twitter/twitter" />
<twitter-auth-button />

<can-import from="auth-component/buttons/yahoo/yahoo" />
<yahoo-auth-button />
```

You'll generally only ever have to specify the `url`, `text`, and `popup` attributes.

```jsx
<can-import from="auth-component/buttons/facebook/" />

<facebook-uth-button url="/auth/facebook" popup="true" text="Login with Facebook" />
```

If you don't specify a `text` attribute, you'll get a square button with an icon.  The button with `text` from the above code would look like the "Login with Facebook" button in this example:

![AuthComponent Buttons Demo](https://cloud.githubusercontent.com/assets/128857/21478412/70751af8-cb08-11e6-8305-807c6fd0777b.jpg)

## Tabs

Currently, the only set of tabs uses [can-route](https://github.com/canjs/can-route) to change tabs.  If the feature is needed, [this issue for creating a standalone set of tabs](https://github.com/icanjs/auth-component/issues/18) is open and could use a champion.

The main demo shows how to use can-route based tabs together. You first need a basic can-route setup, shown in the below example. Then you can use the `<Route />` component from [can-route-react](https://github.com/icanjs/can-route-react) to show and hide components.

```jsx
<AuthContainer>
	<Tabs activeTab={route.data.page} routeAttr='page' />

	<Route data={{page: 'login'}} component={LoginForm} />
	<Route data={{page: 'signup'}} component={SignupForm} />
</AuthContainer>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
