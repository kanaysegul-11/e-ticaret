import { useState } from 'react'
import './App.css'
import PageConteiner from './conteiner/PageConteiner'
import Header from './component/header'
import RouterConfig from './config/RouterConfig'
import Loading from './component/Loading'
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux'

function App() {

  const { products } = useSelector((store) => store.basket);


  return (
    <div>
      <PageConteiner>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className="drawer" sx={{ padding: "20px" }} anchor='right' open={true}>
          {
            products && products.map((product) => {
              return (
                <div className='flex-row' style={{ padding: "20px" }}>
                  <img style={{ marginRight: "5px" }} src={product.image} width={50} height={50} />
                  <p style={{ width: "320px", marginRight: "5px", }} className='details-p'>{product.title}{product.count}</p>
                  <p style={{ width: "60px", marginRight: "5px", fontWeight: "bold" }} className='details-h1'>{product.price}TL</p>
                  <button style={{ width: "50px", marginRight: "5px", }} >Sil</button>
                </div>
              )
            })
          }
        </Drawer>
      </PageConteiner>
    </div>
  )
}

export default App
