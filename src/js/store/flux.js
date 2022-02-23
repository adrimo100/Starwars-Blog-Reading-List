const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      resources: {
        people: [],
        starships: [],
        planets: [],
      },
      favourites: [],
    },

    actions: {
      addFavourite: (name) => {
        const favourites = getStore().resources.favourites;

        setStore({ favourites: [...favourites, name] });
      },
      removeFavourite: (name) => {
        const favourites = getStore().resources.favourites;

        setStore({
          favourites: favourites.filter((elem) => elem.name !== name),
        });
      },

      getAll: () => {
        const resources = getStore().resources;

        let newResources = {};

        Object.keys(resources).forEach((resource) => {
          fetch(`https://www.swapi.tech/api/${resource}/`)
            .then((res) => res.json())
            .then((data) => {
              newResources[resource] = data.results;
            })
            .catch((err) => console.error(err));
        });

        setStore({ resources: newResources });
      },

      // // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },
      // loadSomeData: () => {
      //   /**
      // 		fetch().then().then(data => setStore({ "foo": data.bar }))
      // 	*/
      // },
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
    },
  };
};

export default getState;
