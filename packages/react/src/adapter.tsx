import { type Root, type Container, createRoot } from "react-dom/client";
import type { WrapperProperties } from "./wrapper.tsx";
import { Wrapper } from "./wrapper.tsx";

export {
    type WrapperProperties
}

export interface Adapter<Props extends Record<never, unknown>> {
    render(container: Container, wrapperProps: WrapperProperties, props: Props): void;
    destroy(): void;
}

export type PropertiesOf<T> = T extends new (...args: unknown[]) => Adapter<infer Props> ? Props : Record<never, unknown>;

export const getAdapter = <Props extends Record<never, unknown>>(Component: React.FC<Props>) => class implements Adapter<Props> {
    #root: Root | undefined;
    #container: Container | undefined;

    public render(container: Container, wrapperProps: WrapperProperties, props: Props) {
        if (container !== this.#container) {
            this.#cleanupPreviousRoot();
        }
        const root = this.#root ?? this.#createRoot(container);

        root.render(<Wrapper {...wrapperProps}><Component {...props} /></Wrapper>);
    }

    public destroy() {
        this.#cleanupPreviousRoot();
    }

    #createRoot(container: Container): Root {
        this.#container = container;
        this.#root = createRoot(container);
        return this.#root;
    }

    #cleanupPreviousRoot() {
        if (this.#root) {
            this.#root.unmount();
            this.#root = undefined;
            this.#container = undefined;
        }
    }
}