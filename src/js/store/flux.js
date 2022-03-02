const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      resources: {
        people: [],
        starships: [],
        planets: [],
      },
      favourites: [], // [{ resource, uid, name }]
    },
    actions: {
      switchFavourite: (favourite) => {
        const favourites = [...getStore().favourites];

        const favouriteIndex = findFavouriteIndexByName(
          favourite.name,
          favourites
        );

        if (favouriteIndex < 0) {
          favourites.push(favourite);
        } else {
          favourites.splice(favouriteIndex, 1);
        }

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

export const findFavouriteIndexByName = (name, favourites) =>
  favourites.findIndex((elem) => elem.name == name);
