import { useEffect, useState } from 'react'
import './App.css'
import PageConteiner from './conteiner/PageConteiner'
import Header from './component/header'
import RouterConfig from './config/RouterConfig'
import Loading from './component/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculaBasket, setDrawer } from './redux/slices/basketSlice'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculaBasket());
  }, [])

  return (
    <div>
      <PageConteiner>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className="drawer" sx={{ padding: "20px" }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: "20px" }}>
                    <img style={{ marginRight: "5px" }} src={product.image} width={50} height={50} />
                    <p style={{ width: "250px", marginRight: "5px", }} className='details-p'>{product.title}({product.count})</p>
                    <p style={{ width: "130px", marginRight: "5px", fontWeight: "bold" }} className='details-h1'>{product.price}TL</p>
                    <button style={{ width: "50px", marginRight: "5px", border: "none", padding: "5px", color: "#ffff", borderRadius: "5px", backgroundColor: " rgb(185, 76, 76)" }}  >Sil</button>
                  </div>
                </div>
              )
            })
          }
          <div><p style={{ textAlign: "center" }}>Toplam Tutar: {totalAmount}</p></div>
        </Drawer>
      </PageConteiner>
    </div>
  )
}

export default App
