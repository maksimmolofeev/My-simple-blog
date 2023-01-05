import React from "react";
import { Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CATEGORY_ROUTE } from "../utils/consts";

function CatalogItem({collection}) {

  const navigate = useNavigate();

    return (
      <Col md={10} className="p-2" onClick={() => navigate(`${CATEGORY_ROUTE}/${collection.url}`)}>
            <div className="p-3" style={{height: 350, border: "1px solid black", borderRadius: 5, cursor: 'pointer'}}>
                <h3 style={{color: '#30D5C8'}}>{collection.title}</h3>
            </div>
      </Col>
    );
  }
  
  export default CatalogItem;