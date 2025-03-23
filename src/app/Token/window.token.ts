import { InjectionToken } from "@angular/core";


export const windowToken = new InjectionToken<any>('window', {
    providedIn : 'root',
    factory() {
        return window;
    },
})