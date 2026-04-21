
export const getLocalStorageItem = (name) => {
    return JSON.parse(localStorage.getItem(name));
} 
export const setLocalStorageItem = (key,value) => {
  localStorage.setItem(key, JSON.stringify(value))
} 
