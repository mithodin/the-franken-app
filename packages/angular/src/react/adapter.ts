import { Component, ElementRef, HostBinding, NgZone, OnDestroy } from '@angular/core';
import type { Adapter, WrapperProperties } from '@tfa/react'

@Component({ template: '' })
export abstract class ReactAdapter<Props extends Record<string | number | symbol, unknown>> implements OnDestroy {
    @HostBinding('style.display') readonly display = 'contents';

    protected abstract readonly reactAdapter: Adapter<Props>;

    constructor(
        protected readonly elementRef: ElementRef,
        protected readonly zone: NgZone
    ) { }

    protected render(wrapperProps: WrapperProperties, props: Props) {
        this.zone.runOutsideAngular(() => this.reactAdapter.render(this.elementRef.nativeElement, wrapperProps, props));
    }

    protected getSafeCallback<Args extends Array<unknown>, Ret>(callback: (...args: Args) => Ret) {
        return (...args: Args) => this.zone.run(callback as never, undefined, args)
    }

    public ngOnDestroy(): void {
        this.zone.runOutsideAngular(() => this.reactAdapter.destroy());
    }
}