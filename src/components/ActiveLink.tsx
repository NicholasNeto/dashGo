import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";


interface ActiveLinkProps extends LinkProps {
   // isActive: boolean;
    children: ReactElement;
}

export function ActiveLink({children,  ...rest }: ActiveLinkProps) {

    const { asPath } =  useRouter()
    let isActive = false;  

    if(asPath === rest.href || asPath === rest.as){
        isActive = true  
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}