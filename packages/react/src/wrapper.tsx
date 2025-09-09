import type { ReactNode } from "react";

export interface WrapperProperties { }

export const Wrapper = ({ children }: WrapperProperties & { children: ReactNode }) => <>{children}</>