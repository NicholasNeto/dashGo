import { Heading, HeadingProps as ChakraHeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomizedTitleProps extends ChakraHeadingProps {
    children: ReactNode;
}

export function CustomizedTitle({ children, ...rest }: CustomizedTitleProps) {
    return (
        <Heading {...rest}>{children}</Heading>
    )
}