import style from "../Paginator/Paginator.module.css";
import React, {useState} from "react";
import cn from "classnames"

let Paginator = ({totalCountUsers, pageSize, currentPage, pageChanges, portionSize = 10}) => {
    //p => (p < activePage + 3 && p > activePage - 3) || p === 1 || p === pages.length
    let pagesCount = Math.ceil(totalCountUsers / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let activePage = currentPage;

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map(p => {
                return <span key={p} onClick={() => {
                    pageChanges(p)
                }} className={cn({[style.selectedPage]: currentPage === p}, style.pageNumber)}>{p}</span>
            })}
        {portionNumber < portionCount && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}

export default Paginator;