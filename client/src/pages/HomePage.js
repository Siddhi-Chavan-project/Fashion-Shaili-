import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/HomePage.css";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import LimitedEdition from "./LimitedEdition";

const HomePage = () => {

  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

 
  const banners = [
    {
        image: './images/banner2.jpeg',
        link:"/category/western-wear-womens",
    },
    {
      image: "https://www.bonsoir.co.in/cdn/shop/files/ultimate-banner5.jpg",
      link:"/category/ethinics-men",

  },
    {
        image: "https://www.beyoung.in/blog/wp-content/uploads/2023/08/Header.jpg",
        link:"/category/wedding-collection-women",

    },
    {
        image: 'https://zola.in/cdn/shop/articles/wear_banner.jpg?v=1686815762',
        link:"/category/ethinics-women",

    },
    {
        image: 'https://shreeman.in/cdn/shop/files/Artboard_1_06edebbb-33db-4517-9b71-045f2aa3f8b8.jpg?v=1671272106&width=1800',
        link:"/category/wedding-collection-men",
    },
];

const bannerslide = [
  {
      image: './images/1.jpg',
      link:"/category/maharashtrian-wear",
  },
  
  {
    image: './images/2.jpg',
    link:"/category/south-indian-wear",
},
{
  image: './images/3.jpg',
  link:"/category/lehenga-choli",
},
{
  image: './images/4.jpg',
  link:"/category/gowns",
},



];


  return (
    <Layout title={"All Products - Best offers "}>
      {/* banner image */}
      <div className="home">
               
                <Banner banners={banners} />
            </div>



            <div className=" home-page">
      <div className="container my-5">
      <h1 className="text-center">--WOMENS--</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/westernw.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/western-wear-womens")}
                alt="Women"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Western wear </h5>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/indow.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/indo-western-womens")}
                alt="women"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Indo-Western </h5>
               
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/ethnicw.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/ethinics-women")}
                alt="women"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ethinics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container my-5">
      <h1 className="text-center">--MENS--</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/westernm.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/western-wear-mens")}
                alt="men"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Western wear </h5>
              
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/ethinicm.jpg"
                className="card-img-top"
                onClick={() => navigate("/category/indo-western-mens")}
                alt="Men"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Indo-Western </h5>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/indom.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/ethinics-men")}
                alt="mens"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Ethnics </h5>
               
              </div>
            </div>
          </div>
          
      <div>
<LimitedEdition/>
</div>
        </div>

      </div>


      <h1 className="special-occasion-title">For Your Special Occasions</h1>


    

               
               <Banner1 bannerslide={bannerslide} />
         
  

      <div className=" container my-5">
      <h1 className="text-center">--WEDDING COLLECTIONS--</h1>
       
      <div className="wedding-container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <img
                src="/images/wedw.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/wedding-collection-women")}
                alt="Women"
              />
              <div className="cardimg text-center">
                <h5 className="card-title">Women </h5>
              
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/wedm.jpeg"
                className="card-img-top"
                onClick={() => navigate("/category/wedding-collection-men")}
                alt="Men"
              />
              <div className="cardimg text-center">
                <h5 className="card-title">Men</h5>
                
              </div></div>
            </div>
          </div>
          </div>
          </div>


          <div className="container my-5">
      <h1 className="text-center">Enhance the look with</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/j1.webp"
                className="card-img-top"
                onClick={() => navigate("/category/jewellery")}
                alt="jewellery"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Jewellery </h5>
              
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/bag.png"
                className="card-img-top"
                onClick={() => navigate("/category/bags")}
                alt="bags"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Bags </h5>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/w.webp"
                className="card-img-top"
                onClick={() => navigate("/category/accessories")}
                alt="Accessories"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Accessories </h5>
               
              </div>
            </div>
          </div>
        </div>
      </div>





        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
             <Link to={`/product/${p.slug}`} > <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                /></Link>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-warning ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;