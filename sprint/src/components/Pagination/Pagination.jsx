import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import styles from './Pagination.module.css';


const PAGE_BUTTONS = 5;

export function Pagination({
  totalCount,
  pageSize,
  currentPage,
  handlePageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  let startPage = currentPage - Math.floor(PAGE_BUTTONS);
  startPage = Math.max(1,startPage);
  startPage = Math.min(startPage, totalPages - PAGE_BUTTONS + 1);
  startPage = Math.max(1,startPage);

  const allPages = Array.from(
    { length: Math.min(PAGE_BUTTONS, totalPages)},
    (_,i)=> startPage + i
  );


  return(
    <>
      <ul className={styles.pageContainer}>
        <li>
          <button
            onClick={()=> handlePageChange(currentPage -1 )}
            disabled={currentPage === 1}  
            className={styles.leftBtn}          
          >
            <GoChevronLeft />
          </button>
        </li>

      {allPages.map((page)=>( 
        <li key={page}>
          <button
            onClick={()=> handlePageChange(page)}
            // className={`${currentPage === page ? styles.pageBtn : styles.pageBtnblue}`}
            >
            {page}
          </button>
        </li>
      ))}

        <li>
          <button>
            <GoChevronRight />
          </button>
        </li>
      </ul>
    </>
  )
}

