export function setItem(key ,value) {
    // sessionStorage.setItem(key, JSON.stringify(value))
     localStorage.setItem(key, JSON.stringify(value))  // for storing in localstorage
   }
   
   export function getItem(key) {
     const value = localStorage.getItem(key) || undefined
   
     if (value) {
       return JSON.parse(value) 
     }
     return null
   }


   
   