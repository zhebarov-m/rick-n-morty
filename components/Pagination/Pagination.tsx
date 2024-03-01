'use client';
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectPages, setCurrentPage} from "@/redux/slices/characterSlice";
import {selectCurrentPage} from "@/redux/slices/characterSlice";
import styles from './Pagination.module.scss'

const Pagination = () => {
    const currentPage = useAppSelector(selectCurrentPage)
    const pages = useAppSelector(selectPages)
    console.log(currentPage)
    const dispatch = useAppDispatch()
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages: number = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(pages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < pages) {
            if (endPage < pages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(pages);
        }

        return pageNumbers;
    };

    const handlePageChange = (page: number) => {
        if (page !== currentPage && page >= 1 && page <= pages) {
            dispatch(setCurrentPage(page));
        }
    };

    return (
        <div className={styles.paginateContainer}>
            {getPageNumbers().map((page, index) => (
                <button
                    disabled={page === '...'}
                    key={index}
                    className={page === currentPage ? styles.currentPage : ''}
                    onClick={() => handlePageChange(typeof page === 'number' ? page : currentPage)}
                >
          {page}
        </button>
            ))}
        </div>
    );
};

export default Pagination;
