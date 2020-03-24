# :tada: Hookman
这是一个React hooks状态管理工具, 高效、简洁、小巧, hookman的api设计友好而直观！
- 不同于 redux 的 connect 函数包裹；
- 不需要额外的`Provider`组件嵌套；

# Install
```javascript
npm install git+https://github.com/xiaomocqk/hookman.git
```

# Usage

1. 首先, 我们创建store.js来管理全局状态, hookman接收2个参数

```javascript
// store.js
import React from 'react';
import hookman from 'hookman';

export const INCREASE = 'increase';

const store = { counter: 1 };

const actions = store => ({
  [INCREASE]: payload => ({ counter: store.counter + payload })
});

const useGlobal = hookman(React, store, actions);

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
      <button onClick={add}>
        + 1
      </button>
    </div>
  );

  function add() {
    setGlobalState({ counter: globalState.counter + 1 });
  }
}

export default App;
```
以上是一个hookman简单的应用。

3. hookman也允许你在setGlobalState传入一个函数, 即：
```js
function add() {
  setGlobalState(store => ({
    counter: store.counter + 1
  }));
}
```

4. 如果希望使用类似于redux的actions方式统一处理状态, 可以给hookman传入第三个可选的参数(部分代码已省略):
```js
// store.js
export const INCREASE = 'increase';

const actions = store => ({
  [INCREASE]: payload => ({ counter: store.counter + payload })
});

hookman(React, store, actions);
```

```js
// index.js
import useGlobal, { INCREASE } from './store';

function App() {
  let [ globalState, setGlobalState, dispatch ] = useGlobal();

  return (
    // ...
    <button onClick={() => dispatch(INCREASE, 3)}>+ 3</button>
  )
}


```

**Enjoy it~**