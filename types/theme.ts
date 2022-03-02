export interface TypographProps<T> {
    color?: string
    font?: string,
    bold?: string,
    center?: string,
    margin?: string,
    text?: string,
    theme?:T
}


export interface ThemeProps {
        colors: {
            textBlack: string
            grayText1: string
            textGreenLight: string
            mainRed: string
            grayText2: string
            white: string
            green: string
            dark: string
        }
        font: {
            size: {
                medium: string
            }
        },
}