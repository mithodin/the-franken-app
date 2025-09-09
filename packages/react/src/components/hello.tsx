import { useEffect } from "react";
import { getAdapter } from "../adapter"
import './hello.css'

const HelloComponent = ({ name }: { name: string }) => {
    useEffect(() => {
        return () => console.debug('I was cleaned up')
    }, []);

    return <span className="hello">Hello {name}</span>;
}

export const Hello = getAdapter(HelloComponent);