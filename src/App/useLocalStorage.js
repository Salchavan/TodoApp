import React from "react";

function useLocalStorage(itemStorageName, initialStorageValue) {
  let stringifyItem = localStorage.getItem(itemStorageName);
  let parsedItem;

  if (stringifyItem) {
    parsedItem = JSON.parse(stringifyItem);
  } else {
    localStorage.setItem(itemStorageName, JSON.stringify(initialStorageValue));
    parsedItem = initialStorageValue;
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveLocalItem = (newItem) => {
    localStorage.setItem(itemStorageName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveLocalItem];
};

export { useLocalStorage };