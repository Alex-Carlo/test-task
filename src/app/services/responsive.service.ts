import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {

    constructor(private breakpointObserver: BreakpointObserver) { }


    isLargeScreen(): Observable<boolean> {
        return this.breakpointObserver.observe([
            Breakpoints.Large
        ]).pipe(
            map(result => result.matches),
            shareReplay()
        );
    }

    isMediumScreen(): Observable<boolean> {
        return this.breakpointObserver.observe([
            Breakpoints.Medium,
        ]).pipe(
            map(result => result.matches),
            shareReplay()
        );
    }

    isSmallScreen(): Observable<boolean> {
        return this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]).pipe(
            map(result => result.matches),
            shareReplay()
        );
    }

    isExtraSmallScreen(): Observable<boolean> {
        return this.breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).pipe(
            map(result => result.matches),
            shareReplay()
        );
    }
}
