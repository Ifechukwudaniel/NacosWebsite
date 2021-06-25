import Footer from '@components/Footer'
import CustomHeader from '@components/Header/CustomHeader'
import StoreItem from '@components/store/StoreItem'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function StorePage() {
  return (
    <div>
      <CustomHeader/>
      <div className="storepage">
        <div className="storetabwrapper">
          <div data-duration-in="300" data-duration-out="100" className="storetab w-tabs">
            <div className="storetabmenu w-tab-menu">
              <a data-w-tab="Tab 1" className="storetablink w-inline-block w-tab-link w--current">
                <div className="storetablinktext">All</div>
              </a>
              <a data-w-tab="Tab 2" className="storetablink w-inline-block w-tab-link">
                <div className="storetablinktext">Polo</div>
              </a>
              <a data-w-tab="Tab 3" className="storetablink w-inline-block w-tab-link">
                <div className="storetablinktext">Jacket </div>
              </a>
              <a data-w-tab="Tab 4" className="storetablink w-inline-block w-tab-link">
                <div className="storetablinktext">Cap</div>
              </a>
            </div>
            <div className="tabconetent w-tab-content">
              <div data-w-tab="Tab 1" className="tabpanepage w-tab-pane w--tab-active">
                <div className="storegridlist">
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                  <StoreItem/>
                </div>
              </div>
            </div>
          </div>
          <div className="shopcart">
            <div className="numberofitems">
              <div className="totalnumber">10<br/>‍</div>
            </div><img src="images/cart.png" loading="lazy" width="20" alt="" className="carticon"/>
          </div>
          <div className="pagenation">
            <a href="#" className="pagenationlink prev">Prev</a>
            <a href="#" className="pagenationlink acttive">1</a>
            <a href="#" className="pagenationlink">2</a>
            <a href="#" className="pagenationlink">3</a>
            <a href="#" className="pagenationlink next">Next</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
