import { InjectionToken } from "@angular/core";


export const sessionStorageToken = new InjectionToken<any>('session storage', {
    providedIn : 'root',
    factory() {
        return sessionStorage;
    },
})