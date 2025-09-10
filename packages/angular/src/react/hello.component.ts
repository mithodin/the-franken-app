import { Component, Input, OnChanges } from "@angular/core";
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

    protected override readonly reactAdapter = new Hello();

    ngOnChanges(): void {
        this.render({}, { name: this.name });
    }
}