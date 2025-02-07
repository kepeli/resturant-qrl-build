import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const qrcodeRef = useRef(null);

  const restaurantUrl = "https://www.chicken-republic.com/";

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Welcome to Chicken Republic</h1>
        </div>

        <div className={styles.main}>
          <div className={styles.content}>
            <h2>Delicious Fried Chicken</h2>
            <p>
              Enjoy the best crispy and juicy fried chicken in town.
              Finger-licking good!
            </p>
            <button className={styles.button}>Scan to order Now</button>
          </div>
          <div className={styles.qrCode}>
            <h3>Scan to Order</h3>
            <QRCodeSVG
              value={restaurantUrl}
              size="250"
              fgColor="#000"
              ref={qrcodeRef}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <p>&copy; 2025 Chicken Republic. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
