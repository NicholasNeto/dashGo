import { Flex, useBreakpointValue,  } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false, 
        lg: true,
    })

    return (
        <Flex
            as='header'
            width='100%'
            maxWidth={1480}
            height='20'
            mx='auto' // mx margin horizontal | left and right
            px='6' // px padding horizontal | left and right
            mt='4'
            align='center'
        >
            <Logo /> 
            {isWideVersion && <SearchBox /> }
            <Flex align="center" ml='auto' >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}