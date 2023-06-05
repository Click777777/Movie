import Layout from "../Layout/Layout";
import SearchBar from "../Layout/Navbar/Search/SearchBar";

const Search = () => {
  return (
    <Layout>
      <div className=" relative">
        {/* SearchBar */}
        <div className="pt-[68px]">
          <div className={`container relative mx-auto bg-transparent`}>
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
