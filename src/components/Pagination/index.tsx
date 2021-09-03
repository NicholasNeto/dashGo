import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChanged: (page: number) => void;
}

const siblingCount = 2

function generationPagesArray(from: number, to: number): number[] {
    return [from, to]
}

export function Pagination({ totalCountOfRegisters, registersPerPage, currentPage, onPageChanged }: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages: number[] = currentPage > 1 ?
        generationPagesArray(currentPage - 1 - siblingCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ?
        generationPagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage)) : []

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

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

                <PaginationItem isCurrent={true} pageNumber={1} />


                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} pageNumber={page} />
                })}

            </Stack>
        </Stack>
    )
}