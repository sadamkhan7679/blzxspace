import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
// import PaginationBox from "../components/PaginationBox";
// import Pagination from "@mui/material/Pagination"

import "./Search.css";
// import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
// import Navbar from "../components/Navbar";
import { baseUrl } from "Constants/config";
// import Newheader from "components/Newheader";
import HeaderTwo from "components/HeaderTwo/HeaderTwo";
// import Pagination from "../components/Pagination/Pagination";

function Search() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(20);
  const [editmodal, seteditmodal] = useState(false);
  const [searchText, setsearchText] = useState("");

  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    setPage(page - 1 ? page - 1 : 1);
  }
  useEffect(() => {
    callApi();
  }, [search, page]);

  const paginate = (pagenumber) => setCurrentPage(pagenumber);

  async function callApi() {
    const companies = await axios.get(`${baseUrl}/?page=${page}`);
    console.log(companies.data);
    setList(companies.data);
  }

  const dataSearch = list.filter((item) => {
    let text = searchText.toLowerCase();
    return searchText ? item.name.toLowerCase().includes(text) : true;
  });

  const sorted = dataSearch.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);

  console.log("sotted", sorted);
  return (
    <div className="search">
      <HeaderTwo />

      {/*       
        <nav className="search__navbar">
          <h1>Bizxspace</h1>
          <ul>
            <li>
              <Link to="/search">Home</Link>
            </li>
            <li>
              <h2 onClick={() => setPage(1)} style={{ cursor: "pointer" }}>
                Search
              </h2>
            </li>
            <li>
              <h2 onClick={() => setPage(2)} style={{ cursor: "pointer" }}>
                About
              </h2>
            </li>
            <li>
              <h2 onClick={() => setPage(3)} style={{ cursor: "pointer" }}>
                Signup
              </h2>
            </li>
            <li>
              <h2 onClick={() => setPage(4)} style={{ cursor: "pointer" }}>
                Contact
              </h2>
            </li>
          </ul>

        <form>
          <div>
            <input
              onChange={(e) => setsearchText(e.target.value)}
              type="text"
              className="search__navbarInput"
              placeholder="Search"
              name="search"
            />
            <div className="input-group-btn">
              <button class="btn btn-default" type="submit">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
      </nav>
      
       */}
      <div className="input-group flex-nowrap m-3 searchbar">
        <input
          style={{ width: 400 }}
          onChange={(e) => setsearchText(e.target.value)}
          type="text"
          className="search__searchbar"
          placeholder="Search"
          aria-describedby="addon-wrapping"
        />
      </div>

      <div className="lists">
        {sorted.map((company) => (
          <Card company={company} />
        ))}
      </div>

      <div className="pagination">
        {/* <Pagination postsPerPage={postPerPage} paginate={paginate} totalPosts={sorted.length} /> */}
        <button onClick={prevPage}>
          <ChevronLeft color="white" />
        </button>
        <h2>Page {page}</h2>
        <button onClick={nextPage}>
          <ChevronRight style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}

export default Search;
