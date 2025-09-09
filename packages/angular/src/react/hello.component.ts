import { Component, ElementRef, Input, NgZone, OnChanges, OnInit } from "@angular/core";
import { ReactAdapter } from "./adapter";
import { Hello, PropertiesOf } from "@tfa/react";

@Component({
    standalone: true,
    selector: 'hello',
    template: ''
})
export class HelloComponent extends ReactAdapter<PropertiesOf<typeof Hello>> implements OnChanges {
    @Input()
    public name!: string;

    constructor(
        elementRef: ElementRef,
        zone: NgZone
    ) {
        super(new Hello(), elementRef, zone)
    }

    ngOnChanges(): void {
        console.debug('rendering now!');
        this.render({}, { name: this.name });
    }
}