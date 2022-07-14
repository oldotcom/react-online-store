// import { Component } from "react";

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

const PaginationItem = ({ pageIndex }) => {
    return (
        <li className="pagination__list-item">
            { pageIndex + 1 }
        </li>
    );
};

const Pagination = ({ totalPages = 0 }) => {
    return (
        <div className="pagination">
            <div className="pagination__arrow" data-element="arrow-left"></div>

            <ul className="pagination__list" data-element="pagination">
                {
                    new Array(totalPages).fill('').map((_, index) => {
                        return <PaginationItem pageIndex={index} />
                    })
                }
            </ul>

            <div className="pagination__arrow pagination__arrow_right" data-element="arrow-right"></div>
        </div>
    )
};

export default Pagination;