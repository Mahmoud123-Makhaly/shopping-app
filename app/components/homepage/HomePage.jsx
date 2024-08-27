"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { useCart } from "../../CartContext";

const HomePage = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { addToCart } = useCart(); // Removed cart since it is now in Navbar

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredItems = items
    .filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMinPrice = minPrice === '' || item.price >= parseFloat(minPrice);
      const matchesMaxPrice = maxPrice === '' || item.price <= parseFloat(maxPrice);
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    })
    .sort((a, b) => (sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price));

  return (
    <div className="container">
  <div className="d-flex gap-2 gap-lg-3 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-center">
        <form className="form-inline ">
        <input
          className="form-control mr-sm-2 w-auto"
          type="search"
          placeholder="Search by name"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>

      <div >
        <select
          id="sortSelect"
          className="form-select"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div>
        <div className="d-flex">
          <input
            type="number"
            className="form-control me-2"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
  </div>

      <div className="row mt-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="col-md-4 col-xl-3 col-sm-6" key={item.id}>
              <div className="card mb-3 py-2">
                <Image src="/item.png" width={100} height={100} alt="item" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
