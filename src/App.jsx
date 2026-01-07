import { useState } from 'react';
import Nav from './components/Nav';
import BestProductList from './components/BestProductList';
import SaleProductList from './components/SaleProductList';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { usePageSize } from './hooks/usePageSize';

function App() {
  const [keyword, setKeyword] = useState('');
  const [orderBy, setOrderBy] = useState('recent');
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = usePageSize();

  const handleSearch = (search) => {
    setKeyword(search);
    setPage(1);
  };
  const handleSort = (sort) => {
    setOrderBy(sort);
    setPage(1);
  };

  return (
    <div>
      <Nav />
      <main>
        <BestProductList />
        <section>
          <div className="saleListNav">
            <h2 className="saleProducts">판매 중인 상품</h2>
            <div className="saleBarMenus">
              <SearchBar onSearch={handleSearch} />
              <a href="/">상품 등록하기</a>
              <SortDropdown onSort={handleSort} />
            </div>
          </div>
          <SaleProductList
            keyword={keyword}
            orderBy={orderBy}
            page={page}
            pageSize={pageSize}
            totalCountChange={setTotalCount}
          />
          <Pagination
            currentPage={page}
            totalCount={totalCount}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
