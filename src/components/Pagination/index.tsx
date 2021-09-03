import React from "react"
import { Box, Stack } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChanged: (page: number) => void;
}

const siblingCount = 1

function generationPagesArray(from: number, to: number) {

}

export function Pagination({ totalCountOfRegisters, registersPerPage, currentPage, onPageChanged }: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPage = currentPage > 1 ?
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
                <PaginationItem isCurrent={true} pageNumber={1} />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
                <PaginationItem pageNumber={4} />
            </Stack>
        </Stack>
    )
}