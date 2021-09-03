import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChanged: (page: number) => void;
}

const siblingsCount = 1

function generationPagesArray(from: number, to: number) {
    return [... new Array(to - from)]
        .map((_, index) => from + index + 1)
        .filter(page => page > 0)
}

export function Pagination({
    totalCountOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChanged
}: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages: number[] = currentPage > 1 ?
        generationPagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ?
        generationPagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

    return (
        <Stack
            direction={['column', 'row']}
            marginTop='8'
            spacing='6'
            justifyContent='space-between'
            aling='center'
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction='row' spacing='2'>

                {currentPage > siblingsCount + 1  &&  <PaginationItem pageNumber={1} /> }

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

                <PaginationItem isCurrent={true} pageNumber={currentPage} />


                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

                {currentPage + siblingsCount <  lastPage  &&  <PaginationItem pageNumber={lastPage} /> }
            </Stack>
        </Stack>
    )
}