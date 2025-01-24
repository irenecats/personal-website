import ElementInView from "./ElementInView";
import styles from "./rocket-graphic.module.css";

export default function RocketGraphic() {
  return (
    <ElementInView animateClass={styles.rocketAnimation}>
      <svg
        viewBox="0 0 800 786"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgRocketWrap}
      >
        <path
          className={styles.rocket}
          d="M26.1554 1.18555C24.3523 0.73923 22.5697 1.63759 22.0135 3.28444L22.0113 3.29235C16.6196 19.4728 19.8471 36.4346 31.8564 54.4858L24.8432 79.1758C24.4063 80.714 25.155 82.3604 26.5602 83.2091L26.5839 83.2224L47.4461 95.6404C47.6825 95.785 47.9635 95.9121 48.2653 96.0085C50.194 96.6244 52.1789 95.6468 52.696 93.8263L56.0595 81.9852C57.0275 82.8814 57.9548 83.7704 58.9634 84.6738C59.3507 85.0277 59.8417 85.3169 60.3979 85.4945C61.3622 85.8025 62.342 85.7125 63.1431 85.3179L77.3214 78.335C78.1224 77.9404 78.7455 77.2387 79.0033 76.3311C79.1577 75.7876 79.1633 75.2311 79.0463 74.6988L79.0494 74.7199C78.7831 73.4895 78.499 72.2678 78.222 71.0427L91.2334 75.198C93.1628 75.8112 95.1442 74.8354 95.6641 73.0158C95.6649 73.0131 95.6656 73.0105 95.6671 73.0052C95.7465 72.7256 95.7846 72.4413 95.7889 72.1578L95.7885 72.1807L96.1937 49.2883C96.2131 47.7175 95.1425 46.2274 93.5157 45.7078L67.384 37.3625C59.2701 20.0546 46.9307 6.36417 26.1554 1.18555ZM46.906 87.3671L32.5632 78.8298L37.3311 62.0443C40.854 66.5248 45.0053 71.1974 49.441 75.6413L50.0693 76.2305L46.906 87.3671ZM88.9113 51.4317L88.6327 67.1702L76.3481 63.247C74.6261 56.4726 72.8004 50.7183 70.6777 45.0648L70.891 45.6768L88.9113 51.4317ZM71.4234 73.2111L61.77 77.97C33.7326 52.3454 22.6575 29.6745 28.0144 8.82968C53.549 16.8088 64.0822 40.357 71.4198 73.2128L71.4234 73.2111ZM30.6977 26.3659C29.3525 31.1018 32.329 36.2395 37.3462 37.8418C42.3635 39.4441 47.5209 36.904 48.8661 32.1681C50.2113 27.4322 47.2348 22.2945 42.2175 20.6922C37.2016 19.0961 32.0478 21.6344 30.6977 26.3659ZM41.8782 29.9365C41.568 31.0288 40.377 31.6153 39.2198 31.2458C38.0626 30.8762 37.3753 29.6898 37.6855 28.5975C37.9958 27.5052 39.1868 26.9186 40.344 27.2882C41.5012 27.6578 42.1885 28.8442 41.8782 29.9365ZM67.1378 91.293L66.771 92.5629C66.379 93.9428 66.9405 95.4113 68.075 96.3118L68.0951 96.3268L80.5719 106.067C80.9149 106.34 81.3346 106.569 81.8042 106.719C83.7328 107.335 85.7178 106.358 86.2349 104.537C86.3593 104.099 86.387 103.648 86.3279 103.211L86.3303 103.235L84.5014 88.2511C84.3297 86.9128 83.3939 85.7103 82.029 85.2025L82.0206 85.1998C80.9239 84.7891 79.977 84.409 79.1633 84.0859C78.5613 83.7152 77.8448 83.3828 77.0789 83.1382C75.2202 82.5446 73.3417 82.5461 71.6634 83.0346L71.6966 83.0251C69.2128 84.1167 68.5196 86.5141 67.1378 91.293ZM76.757 90.4858C77.0194 90.5926 77.2957 90.7039 77.5867 90.817L78.1616 95.5013L74.404 92.566C74.706 91.5459 74.9937 90.5759 75.2357 89.8849C75.7042 90.0603 76.2428 90.2784 76.757 90.4858Z"
        />

        <path
          className={styles.circle}
          d="M296 776C296 781.523 291.523 786 286 786C280.477 786 276 781.523 276 776C276 770.477 280.477 766 286 766C291.523 766 296 770.477 296 776Z"
        />
        <path
          className={styles.circle}
          d="M278 560C278 565.523 273.523 570 268 570C262.477 570 258 565.523 258 560C258 554.477 262.477 550 268 550C273.523 550 278 554.477 278 560Z"
        />
        <path
          className={styles.circle}
          d="M221 342C221 347.523 216.523 352 211 352C205.477 352 201 347.523 201 342C201 336.477 205.477 332 211 332C216.523 332 221 336.477 221 342Z"
        />
        <path
          className={styles.circle}
          d="M109 128C109 133.523 104.523 138 99 138C93.4772 138 89 133.523 89 128C89 122.477 93.4772 118 99 118C104.523 118 109 122.477 109 128Z"
        />
        <path
          d="M286 776C286 697.5 277.306 611.874 269 556.5C260 496.5 226 374 211 339.5C194.5 293 164.5 214 99 125"
          className={styles.rocketPath}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path id="LastStep" d="M98.5 127.5H417" />
        <path id="ThirdStep" d="M65.5 342.5H712.5" />
        <path id="SecondStep" d="M179 560.5H802.5" />
        <path id="StartStep" d="M131 776.5H581.5" />
        <text
          className="fill-[#dadfe2] text-2xl font-semibold align-middle"
          style={{ textAnchor: "middle" }}
        >
          <textPath
            href="#LastStep"
            alignmentBaseline="middle"
            startOffset="140"
            className={styles.textPath}
          >
            New opportunities!
          </textPath>
          <textPath
            href="#ThirdStep"
            alignmentBaseline="middle"
            startOffset="60"
            className={`${styles.textPath} ${styles.year}`}
          >
            2021 - 2024
          </textPath>
          <textPath
            href="#ThirdStep"
            alignmentBaseline="middle"
            startOffset="410"
            className={styles.textPath}
          >
            Fulltime Software Engineer at Embention
          </textPath>
          <textPath
            href="#SecondStep"
            alignmentBaseline="middle"
            startOffset="40"
            className={`${styles.textPath} ${styles.year}`}
          >
            2021
          </textPath>
          <textPath
            href="#SecondStep"
            alignmentBaseline="middle"
            startOffset="365"
            className={styles.textPath}
          >
            Software Engineer Internship at Embention
          </textPath>
          <textPath
            href="#StartStep"
            alignmentBaseline="middle"
            startOffset="75"
            className={`${styles.textPath} ${styles.year}`}
          >
            2016 - 2021
          </textPath>
          <textPath
            href="#StartStep"
            alignmentBaseline="middle"
            startOffset="305"
            className={styles.textPath}
          >
            University of Alicante
          </textPath>
        </text>
      </svg>
    </ElementInView>
  );
}
