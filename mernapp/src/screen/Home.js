import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import Card from '../Components/Card.js';
// import Carousal from '../Components/Carousal.js';

export default function Home() {
  const [search, setsearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()

    setFoodCat(response[1]);
    setFoodItem(response[0]);


    // console.log(response[0],response[1]); 
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='caraousel' >
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
                {/* <button className="btn btn-dark btn-hover-light" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodCat.map((data) => {
            return (<div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr />
              {
                foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 mx-3'>
                        <Card foodItem={filterItems}
                          option={filterItems.options[0]}
                        ></Card>
                      </div>
                    )
                  })
              }
            </div>)
          })
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
