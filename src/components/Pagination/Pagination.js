import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // console.log(postsPerPage,"posterpage")
    // console.log(totalPosts,"totalPosts")
    // console.log(paginate,"paginate")

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    // console.log(pageNumbers,"pagenumbers")
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li
                        style={{ cursor: 'pointer' }}
                        onClick={() => paginate(number)}
                        key={number} className="page-item">
                        <a className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination