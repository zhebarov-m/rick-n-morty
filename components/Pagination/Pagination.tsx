'use client';
import React from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {setCurrentPage} from "@/redux/slices/characterSlice";
import {selectCurrentPage} from "@/redux/slices/characterSlice";

const Pagination = () => {
    const page = useAppSelector(selectCurrentPage)
    console.log(page)
    const dispatch = useAppDispatch()

    const handleNextPage = () => {
        dispatch(setCurrentPage(page + 1))
    }
    const handlePrevPage = () => {
        dispatch(setCurrentPage(page - 1))
    }


    return (
        <>
            <button onClick={handlePrevPage}>PREV</button>
            <button onClick={handleNextPage}>NEXT</button>
        </>
    );
};

export default Pagination;
