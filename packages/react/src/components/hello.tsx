import { useEffect } from "react";
import { getAdapter } from "../adapter"
import styled from "styled-components";

const Name = styled.span`
    & {
        color: red;
    }
`

const HelloComponent = ({ name }: { name: string }) => {
    useEffect(() => {
        return () => console.debug('I was cleaned up')
    }, []);

    return <Name>Hello {name}</Name>;
}

export const Hello = getAdapter(HelloComponent);