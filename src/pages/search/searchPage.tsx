
import React, { useEffect } from 'react'
import { searchProduct } from '../../redux/productSearch/slice'
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'

interface MathParams {
  keywords: string
}
export const SearchPage: React.FC = () => {

  const { keywords } = useParams<MathParams>();
  const loading = useSelector((s) => s.productSearch.loading);
  const error = useSelector((s) => s.productSearch.error);
  const data = useSelector((s) => s.productSearch.data);
  const pagination = useSelector((s) => s.productSearch.pagination);

  return (
    <>
      <div>
        搜索页面
     </div>
    </>
  )
}