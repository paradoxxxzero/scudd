# scudd

A very small lib for quick React PureComponent logging.

## Usage

During debug replace:

```js
class MyComponent extends React.PureComponent {
  render() { ... }
}
```

by

```js
import ScuddComponent from 'scudd'
class MyComponent extends ScuddComponent {
  render() { ... }
}
```

and get a nice table of render triggers in your console.

[![](https://github.com/paradoxxxzero/scudd/raw/master/sshot.png)](https://github.com/paradoxxxzero/scudd/raw/master/sshot.png)
