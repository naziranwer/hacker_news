import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import { fetchNews } from "../services/api";

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews(query, page);
      setNews(data.hits);
    };
    fetchData();
  }, [query, page]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      <NewsList news={news} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Dashboard;
