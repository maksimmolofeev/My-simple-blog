import React from "react";
import { Col} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveCategory } from "../store/productSlicer";
import { CATEGORY_ROUTE } from "../utils/consts";


function CatalogItem({categories}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function activeCategory () {
    navigate(`${CATEGORY_ROUTE}/${categories.url}`)
    dispatch(setActiveCategory(categories.id))
  }


  return (
    <Col md={10} className="p-2" onClick={() => activeCategory()}>
          <div className="p-3" style={{height: 350, border: "1px solid black", borderRadius: 5, cursor: 'pointer'}}>
              <h3 style={{color: '#30D5C8'}}>{categories.name}</h3>
          </div>
    </Col>
  );
}

export default CatalogItem;