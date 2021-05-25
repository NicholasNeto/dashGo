import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
    return (
        <HStack
            spacing='8'
            mx='8' // mx margin horizontal | left and right
            pr='8'
            py='1' // px padding vertical | top and bottom
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
        >
            <Icon as={RiNotificationLine} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
    )
}