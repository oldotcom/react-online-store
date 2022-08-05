// import { Component } from "react";

import { useState } from "react";

// export default class Pagination extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {

//         };
//     }

//     render() {
//         return (
//             <div>Hello, from Pagination</div>
//         );
//     }
// }

const PaginationItem = ({ onClick, pageIndex, isActive }) => {
    const activeClass = isActive ? 'active' : '';

    return (
        <li onClick={onClick} className={`pagination__list-item ${activeClass}`}>
            { pageIndex + 1 }
        </li>
    );
}; 

const Pagination = ({ totalPages = 0, activePageIndex = 0 }) => {
    const [pageIndex, setPageIndex] = useState(activePageIndex);

    const changePage = (newPageIndex) => {
        setPageIndex(newPageIndex);
    };
    
    return (
        <div className="pagination">
            <div className="pagination__arrow" data-element="arrow-left"></div>

            <ul className="pagination__list" data-element="pagination">
                {
                    new Array(totalPages).fill('').map((_, index) => {
                        return <PaginationItem
                            onClick={() => changePage(index)} 
                            pageIndex={index} 
                            isActive={pageIndex === index} 
                        />
                    })
                }
            </ul>

            <div className="pagination__arrow pagination__arrow_right" data-element="arrow-right"></div>
        </div>
    )
};

export default Pagination;