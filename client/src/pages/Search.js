import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../styles/search.css";

const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1> 
          {values?.results.length < 1 ? (
            <div className="no-products">
              <h6>No Products Found</h6>
              <img 
                src="/images/no.png" 
                alt="No products found" 
                className="no-results-img"
              /><h1>Sorry! We couldn’t find what you’re looking for.</h1>
            </div>
          ) : (
            <>
              <h6>Found {values?.results.length}</h6>
              <div className="d-flex flex-wrap mt-4">
                {values?.results.map((p) => (
                  <div key={p._id} className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text"> ₹ {p.price}</p>
                      <button 
                        className="btn btn-primary ms-1" 
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
