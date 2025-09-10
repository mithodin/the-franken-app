import { PropertiesOf, Tags } from "@tfa/react";
import { ReactAdapter } from "./adapter";
import { Component, effect, ElementRef, EventEmitter, inject, NgZone, OnInit, Output } from "@angular/core";
import { HomeStore } from "src/app/home/home.store";
import { theme } from "./theme";

@Component({
    selector: 'app-tags',
    standalone: true,
    template: ''
})
export class TagsComponent extends ReactAdapter<PropertiesOf<typeof Tags>> implements OnInit {
    readonly #homeStore = inject(HomeStore);
    readonly tags = this.#homeStore.selectors.tags;
    @Output() selectTag = new EventEmitter<string>();

    private reactSelectTag = this.getSafeCallback((tag: string) => this.selectTag.emit(tag));

    protected override reactAdapter = new Tags();

    constructor(
        elementRef: ElementRef,
        zone: NgZone
    ) {
        super(elementRef, zone)

        effect(() => {
            this.render({
                theme
            }, {
                tags: this.tags(),
                onSelectTag: this.reactSelectTag
            });
        })
    }

    ngOnInit(): void {
        this.#homeStore.getTags();
    }
}