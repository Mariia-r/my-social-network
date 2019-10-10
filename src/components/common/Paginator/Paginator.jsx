import React, {useState} from "react";
import css from "./Paginator.module.css";

let Paginator = ({portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    
    let pagesPortion = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i); 
    }

    return (
            <div className={css.paginator}>
                {portionNumber > 1 && <button className={css.btn} onClick = {() => { setPortionNumber(portionNumber - 1) }}>&#8592;</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p, index) => {
                        return <span 
                                key={index}
                                className={props.currentPage === p ? css.selectedPage : ""}
                                onClick={(e) => {props.onPageChanged(p)}}>
                                {p}
                          </span>
               })}
               {portionNumber < pagesPortion && <button className={css.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>&#8594;</button>}
            </div>
    )
}

export default Paginator;