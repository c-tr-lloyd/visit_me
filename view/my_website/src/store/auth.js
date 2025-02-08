import { defineStore } from 'pinia' 

export const useAuthStore = defineStore('auth') 


export function getCSRFToken() { 
    const name = 'csrftoken'; 
    let cookieValue = null;
    if(document.cookie && document.cookie !== '') { 
        const cookies = document.cookie.split(';'); 
        for (let i = 0; i < cookies.length; i++) { 
            const cookie = cookies[i].trim(); 
            if(cookie.substring(0, name.length + 1) === (name + '=')) { 
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); 
                break; 
            }
        }
    }
    if ( cookieValue === null) { 
        throw 'Missing CSRF Cookie.' 
    }
    return cookieValue; 
}