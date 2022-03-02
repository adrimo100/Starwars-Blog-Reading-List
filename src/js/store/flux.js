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
      switchFavourite: (name) => {
        const favourites = [...getStore().favourites];

        const favouriteIndex = favourites.indexOf(name);

        if (favouriteIndex < 0) {
          favourites.push(name);
        } else {
          favourites.splice(favouriteIndex, 1);
        }

        setStore({ favourites });
      },
      removeFavourite: (name) => {
        const favourites = [...getStore().favourites];

        favourites.filter((elem) => elem.name !== name);

        setStore({ favourites });
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
