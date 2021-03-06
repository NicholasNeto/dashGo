
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProvider {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContenxt = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContenxt.Provider value={disclosure}>
            {children}
        </SidebarDrawerContenxt.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContenxt)