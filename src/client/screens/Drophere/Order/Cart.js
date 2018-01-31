//MODULES
import React, { Component } from "react"
import _ from "lodash"

//STYLES
import styles from "./css/step3.scss"

//COMPONENTS
import DataDisplay from "../../../components/DataDisplay"
import RoundedButton from "../../../components/RoundedButton"

const buyerinfo = [
  { name: "Name:", value: "Zain Fikri" },
  {
    name: "Address shipping:",
    value: "Jalan Terusan Piranha, Malang, Jawa Timur, 63172"
  },
  { name: "Product category:", value: "T-Shirt" },
  { name: "Product name:", value: "Cotton30s" },
  { name: "Base color:", value: "#020266" },
  { name: "Size:", value: "M(10),L(20),XL(9)" },
  { name: "Payment method:", value: "COD" }
];

//COMPONENT
export default class Cart extends Component {
  renderInformation() {
    if (buyerinfo)
      return _.map(buyerinfo, (data, i) => {
        return <DataDisplay name={data.name} value={data.value} key={i} />;
      })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>Cart</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.cartcontainer}>
            <div className={styles.cartflex}>
              <p className={styles.title}>Previews Design</p>
            </div>

          </div>
          <div className={styles.cartcontainer}>
            <div className={styles.cartflex}>
              <div className={styles.preview}>
                <p className={styles.pic}>GAMBAR MASUK SINI</p>
              </div>
            </div>
            <div className={styles.cartflex}>
              <p className={styles.title}>Information</p>
              <div className={styles.infoorder}>{this.renderInformation()}</div>
              <p className={styles.title}>Total Cost</p>
              <p className={styles.margincost}>Rp. 2.800.000</p>
              <div className={styles.editorder}>
                <div className={styles.flexgrowitem + " " + styles.widthitem}>
                  <div className={styles.editorderitem}>
                    <img className={styles.img} src="/img/cross.svg" />
                  </div>
                  <div
                    className={
                      styles.editorderitem + " " + styles.sizeorderitem
                    }
                  >
                    <p className={styles.editordertext}>cancel order</p>
                  </div>
                </div>
                <div className={styles.flexgrowitem}>
                  <div className={styles.editorderitem}>
                    <img
                      className={styles.img}
                      src="/img/ic-save-black-24-dp.png"
                    />
                  </div>
                  <div
                    className={
                      styles.editorderitem + " " + styles.sizeorderitem
                    }
                  >
                    <p className={styles.editordertext}>save pdf</p>
                  </div>
                </div>
                <div className={styles.flexgrowitem}>
                  <div className={styles.editorderitem}>
                    <img
                      className={styles.img}
                      src="/img/ic-mode-edit-black-36-dp.png"
                    />
                  </div>
                  <div
                    className={
                      styles.editorderitem + " " + styles.sizeorderitem
                    }
                  >
                    <p className={styles.editordertext}>edit information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <RoundedButton
            to="/drophere/order/4"
            className={styles.button}
            primary
          >
            GO TO PAYMENT
            </RoundedButton>
        </div>
      </div>
    )
  }
}
