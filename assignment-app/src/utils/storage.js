export function setItem(key ,value) {
    // sessionStorage.setItem(key, JSON.stringify(value))
     localStorage.setItem(key, JSON.stringify(value))  // for storing in localstorage
   }
   
   export function getItem(key) {
     const value = sessionStorage.getItem(key) || undefined
   
     if (value) {
       return JSON.parse(value) 
     }
     return null
   }
   
   export function deleteItem(key) {  // for deleting 
     sessionStorage.removeItem(key)
   }
 
   export function clear() {   // using clear function to clear the data
     sessionStorage.clear()
     localStorage.clear()
   }
   