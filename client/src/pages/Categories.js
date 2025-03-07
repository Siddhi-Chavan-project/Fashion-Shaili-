import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px"  }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link
                  to={`/category/${c.slug}`}
                  className="btn cat-btn"
                  style={{
                    backgroundColor: "rgb(2, 2, 27)",
                    color: "white",
                    border: "2px solid rgb(153, 0, 255)",
                    borderRadius: "5px",
                    padding: "15px 20px", 
                    height: "100px", 
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
