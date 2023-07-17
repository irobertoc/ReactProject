import { createContext } from "react";


export const DarkMode = createContext()

export const DarkModeProvider = ({children}) => {

    return (
        <DarkModeProvider>
            {children}
        </DarkModeProvider>
    )

}