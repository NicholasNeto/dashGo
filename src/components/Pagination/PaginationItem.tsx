import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    pageNumber: number
    isCurrent?: boolean;
    handlePage: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, pageNumber, handlePage }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    backgroundColor: 'pink.500',
                    cursor: 'default',
                }}
            >
                {pageNumber}
            </Button>
        )
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            backgroundColor='gray.700'
            _hover={{
                backgroundColor: 'gray.500'
            }}
            onClick={() => handlePage(pageNumber)}
            
        >
            {pageNumber}
        </Button>
    )

}