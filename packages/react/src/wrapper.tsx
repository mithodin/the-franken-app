import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { AppTheme } from "./theme";

export interface WrapperProperties {
    theme: AppTheme
}

export const Wrapper = ({ children, theme }: WrapperProperties & { children: ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>