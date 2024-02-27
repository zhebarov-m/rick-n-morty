'use client';
import React from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectPage, setPage} from "@/redux/slices/characterSlice";

const Pagination = () => {
    const page = useAppSelector(selectPage)
    console.log(page)
    const dispatch = useAppDispatch()

    const handleNextPage = () => {
        dispatch(setPage(page + 1))
    }
    const handlePrevPage = () => {
        dispatch(setPage(page - 1))
    }


    return (
        <>
            <button onClick={handlePrevPage}>PREV</button>
            <button onClick={handleNextPage}>NEXT</button>
        </>
    );
};

export default Pagination;
