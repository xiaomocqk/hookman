const listeners = [];

export default function(React, store) {
  return useGlobal;
  
  function useGlobal(){
    let [store$, setStore] = React.useState(store);

    React.useEffect(() => {
      let length = listeners.push(setStore);

      // Remove
      return () => listeners.splice(length - 1, 1);
    }, []);

    return [store$, setState];
  }

  function setState(newState) {
    // Recode
    store = { ...store, ...newState };
    listeners.forEach(listener => listener(store));
  }
}