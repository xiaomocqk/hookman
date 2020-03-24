const listeners = [];

export default function (React, store, actions) {
  return useGlobal;

  function useGlobal() {
    let [globalState, setGlobalState] = React.useState(store);

    React.useEffect(() => {
      let idx = listeners.push(setGlobalState) - 1;

      return () => listeners.splice(idx, 1);
    }, []);

    return [globalState, setState, dispatch];
  }

  function setState(newState) {
    if (typeof newState === 'function') {
      newState = newState(store) || {};
    }

    store = { ...store, ...newState };
    listeners.forEach(listener => listener(store));
  }

  function dispatch(type, payload) {
    let newState = actions(store)[type]?.(payload);
    newState && setState(newState);
  }
}
