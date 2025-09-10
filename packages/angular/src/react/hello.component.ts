import { Component, ElementRef, Input, NgZone, OnChanges, OnInit } from "@angular/core";
import { ReactAdapter } from "./adapter";
import { Adapter, Hello, PropertiesOf } from "@tfa/react";

@Component({
    standalone: true,
    selector: 'hello',
    template: ''
})
export class HelloComponent extends ReactAdapter<PropertiesOf<typeof Hello>> implements OnChanges {
    @Input()
    public name!: string;

    protected override readonly reactAdapter = new Hello();

    ngOnChanges(): void {
        console.debug('rendering now!');
        this.render({}, { name: this.name });
    }
}