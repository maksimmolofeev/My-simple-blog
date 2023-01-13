import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/productSlicer";
import { selectLimit, selectPage, selectProduct, selectTotalCount } from "../store/selectors";

function Pages() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalCount = useSelector(selectTotalCount);
  const limit = useSelector(selectLimit);
  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination>
      {pages.map(item =>
        <Pagination.Item
          key={item}
          active={item === page}
          onClick={() => {dispatch(setPage(item))}}
        >
          {item}
        </Pagination.Item>
      )}
    </Pagination>
  );
}

export default Pages;