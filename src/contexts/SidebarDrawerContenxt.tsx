
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { createContext, ReactNode, useContext } from 'react'

interface SidebarDrawerProvider {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContenxt = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
    const disclosure = useDisclosure()

    return (
        <SidebarDrawerContenxt.Provider value={disclosure}>
            {children}
        </SidebarDrawerContenxt.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContenxt)