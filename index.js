const listeners = [];

export default function(React, store) {
  return useGlobal;
  
  function useGlobal(){
    let [store$, setStore] = React.useState(store);

    React.useEffect(() => listeners.push(setStore), []);

    return [store$, setState];
  }

  function setState(newState) {
    let store$ = { ...store, ...newState };
    listeners.forEach(listener => listener(store$));
  }
}