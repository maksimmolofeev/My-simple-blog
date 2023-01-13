import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../http/productApi";
import { setActiveCategory, setCategories, setProducts } from "../store/productSlicer";
import { selectActiveCategory, selectCategories } from "../store/selectors";
import { CATEGORY_ROUTE } from "../utils/consts";

function CategoryBar() {
    useEffect(() => {
        fetchCategories().then(data => dispatch(setCategories(data)))
        fetchProducts().then(data => dispatch(setProducts(data.rows)))
    }, []);

    const category = useSelector(selectActiveCategory);
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const navigate = useNavigate()

    // const selectedCategory = category

    function activeCategory (url, id) {
        navigate(`${CATEGORY_ROUTE}/${url}`)
        dispatch(setActiveCategory(id))
    }



    console.log(categories)
    console.log(category)

    return (
        <ListGroup>
            {categories.map(item =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={item.id === category}
                    key={item.id}
                    onClick={() => activeCategory(item.url, item.id)}
                >
                    {item.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
  }
  
  export default CategoryBar;