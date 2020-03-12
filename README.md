# About hookman
react hooks状态管理工具, 高效、简洁、小巧（体积不到1kb）, 不再需要redux繁琐的connect嵌套, 就能拥有全局状态管理的便利性！

# Install
```javascript
npm install git+https://github.com/xiaomocqk/hookman.git
```

# Usage

1. 创建store.js管理全局状态, hookman接收两个参数

```javascript
// store.js
import React from 'react';
import hookman from 'hookman';

const store = { counter: 1 };
const useGlobal = hookman(React, store);

export default useGlobal;
```

2. 引入创建的store.js

```javascript
// index.js
import React from 'react';
import useGlobal from './store';

function App() {
  const [ store, setStore ] = useGlobal();

  retrun (
    <div>
      <Counter />
      <button onClick={() => setStore({ counter: ++ store.counter })}>+1</button>
    </div>
  );
}

function Counter() {
  const [ store, setStore ] = useGlobal();
  
  return <p>Counter: { store.counter }</p>
}

export default App;
```

**Enjoy it~**