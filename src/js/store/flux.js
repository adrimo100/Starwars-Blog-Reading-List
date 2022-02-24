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

      getAllResources: () => {
        const resources = getStore().resources;

        Object.keys(resources).forEach((resource) => {
          fetch(`https://www.swapi.tech/api/${resource}/`)
            .then((res) => res.json())
            .then((body) => {
              getActions().updateResource({ [resource]: body.results });
            });
        });
      },

      updateResource(resource) {
        setStore({ resources: { ...getStore().resources, ...resource } });
      },
    },
  };
};

export default getState;
