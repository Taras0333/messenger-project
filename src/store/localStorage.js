
    export const loadState = () => {
        try {
          const serializedState = localStorage.getItem('state');
          if (serializedState === null) {
            return undefined;
          }
          let parsedStore = JSON.parse(serializedState);
          
        
         parsedStore.contacts[0].messages.map((el) => {
          return el.date = new Date(el.date)
         });
         parsedStore.contacts[1].messages.map((el) => {
          return el.date = new Date(el.date)
         });
         parsedStore.contacts[2].messages.map((el) => {
          return el.date = new Date(el.date)
         });
         parsedStore.contacts[3].messages.map((el) => {
          return el.date = new Date(el.date)
         });
         parsedStore.contacts[4].messages.map((el) => {
          return el.date = new Date(el.date)
         });
         parsedStore.contacts[5].messages.map((el) => {
          return el.date = new Date(el.date)
         });

          return parsedStore;
          
        } catch (err) {
          return undefined;
        }
      }; 
      export const saveState = (state) => {
        try {
          const serializedState = JSON.stringify(state);
          localStorage.setItem('state', serializedState);
        } catch {
          // ignore write errors
        }
      };