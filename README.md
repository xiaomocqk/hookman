# :tada: Hookman
这是一个React hooks状态管理工具, 高效、简洁、小巧, hookman的api设计友好而直观！
- 不同于 redux 的 connect 函数包裹；
- 不需要额外的`Provider`组件嵌套；

# Install
```javascript
npm install git+https://github.com/xiaomocqk/hookman.git
```

# Usage

1. 首先, 我们创建store.js来管理全局状态, hookman接收两个参数

```javascript
// store.js
import React from 'react';
import hookman from 'hookman';

const store = { counter: 1 };
const useGlobal = hookman(React, store);

export default useGlobal;
```

2. 引用store.js

```javascript
// index.js
import React from 'react';
import useGlobal from './store';

function Counter() {
  const [ globalState, setGlobalState ] = useGlobal();
  
  return <p>Counter: { globalState.counter }</p>;
}

function App() {
  const [ globalState, setGlobalState ] = useGlobal();

  retrun (
    <div>
      <Counter />
      <button onClick={add}>+1</button>)}>Another +1</button>
    </div>
  );

  function add() {
    setGlobalState({ counter: globalState.counter + 1 });
  }
}

export default App;
```
以上是一个hookman简单的应用。

hookman也允许你在setGlobalState传入一个函数, 即：
```js
function add() {
  setGlobalState(store => ({
    counter: store.counter + 1
  }));
}
```

**Enjoy it~**