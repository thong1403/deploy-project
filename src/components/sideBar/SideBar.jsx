import React from "react";

export default function SideBar() {
  return (
    <>
      <div
        className="col-xs-12 col-sm-3"
        style={{
          boxSizing: "border-box",
          position: "relative",
          minHeight: "1px",
          paddingRight: "5px",
          paddingLeft: "5px",
          cssFloat: "left",
          width: "25%",
        }}
      >
        <div
          className="right-bottom"
          style={{ boxSizing: "border-box", margin: "0px 0px 15px" }}
        >
          <ul
            id="tab-right"
            className="tab-right tab-top"
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              whiteSpace: "nowrap",
              marginTop: "0px",
              marginBottom: "0px",
              height: "32px",
              borderBottom: "3px solid rgb(7, 159, 90)",
            }}
          >
            <li
              className="active"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.3,
                margin: "0px",
                display: "inline-block",
              }}
            >
              <a
                className="tab"
                aria-expanded="true"
                href="/#"
                style={{
                  boxSizing: "border-box",
                  transition: "all 0.4s ease 0s",
                  textShadow: "none",
                  textDecoration: "none",
                  lineHeight: "32px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  height: "32px",
                  display: "block",
                  padding: "0px 15px 0px 0px",
                  background: "none",
                  backgroundColor: "initial",
                  color: "rgb(1, 117, 64)",
                }}
              >
                {"Ảnh"}
              </a>
            </li>
          </ul>
          <div className="tab-content" style={{ boxSizing: "border-box" }}>
            <div
              id="gallery"
              className="tab-pane active"
              style={{ boxSizing: "border-box", display: "block" }}
            >
              <a
                className="more"
                href="/#"
                style={{
                  boxSizing: "border-box",
                  transition: "all 0.4s ease 0s",
                  textShadow: "none",
                  background: "rgb(245, 245, 245)",
                  backgroundColor: "rgb(245, 245, 245)",
                  display: "block",
                  lineHeight: "28px",
                  textAlign: "right",
                  fontStyle: "italic",
                  paddingRight: "10px",
                  textDecoration: "none",
                  color: "rgb(1, 117, 64)",
                }}
              >{`Xem 
								thêm`}</a>
              <div
                id="ctl00_g_022f3492_8ad7_4927_aedb_b06a1cc2b38f"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="right-slide"
                  style={{ boxSizing: "border-box", position: "relative" }}
                >
                  <div className="flslide" style={{ boxSizing: "border-box" }}>
                    <div
                      id="slider"
                      className="flexslider"
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        margin: "0px",
                        position: "relative",
                        zoom: 1,
                      }}
                    >
                      <div
                        className="flex-viewport"
                        style={{
                          boxSizing: "border-box",
                          transition: "all 1s ease 0s",
                          maxHeight: "2000px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <ul
                          className="slides"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            padding: "0px",
                            listStyle: "none",
                            marginTop: "0px",
                            marginBottom: "0px",
                            zoom: 1,
                            width: "800%",
                            transitionDuration: "0s",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <li
                            className="flex-active-slide"
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              margin: "0px",
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              width: "292px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                width: "100%",
                                display: "block",
                                height: "auto",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              margin: "0px",
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              width: "292px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/song ca Đường tàu mùa xuân.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                width: "100%",
                                display: "block",
                                height: "auto",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              margin: "0px",
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              width: "292px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/Lãnh đạo tỉnh và Ban Tổ chức tặng cờ lưu niệm cho các đại diện các Đoàn tham dự Lễ phát động.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                width: "100%",
                                display: "block",
                                height: "auto",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              margin: "0px",
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              width: "292px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/1 Vận động viên Đồng Nai giành Huy chương vàng môn Khiêu vũ.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                width: "100%",
                                display: "block",
                                height: "auto",
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                      <ul
                        className="flex-direction-nav"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          listStyle: "none",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        <li
                          className="flex-nav-prev"
                          style={{ boxSizing: "border-box", lineHeight: 1.3 }}
                        >
                          <a
                            className="flex-prev flex-disabled"
                            href="//#"
                            tabIndex="-1"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.4s ease 0s",
                              textShadow: "none",
                              color: "rgb(1, 117, 64)",
                              textDecoration: "none",
                              margin: "0px",
                              overflow: "hidden",
                              width: "15px",
                              height: "25px",
                              position: "absolute",
                              top: "50%",
                              zIndex: 10,
                              textIndent: "-100000px",
                              display: "inline-block",
                              background:
                                'url("https://svhttdl.dongnai.gov.vn/Style%20Library/images/prev.png")',
                              left: "50px",
                              backgroundColor: "initial",
                              cursor: "default",
                              opacity: 0,
                            }}
                          >
                            Previous
                          </a>
                        </li>
                        <li
                          className="flex-nav-next"
                          style={{ boxSizing: "border-box", lineHeight: 1.3 }}
                        >
                          <a
                            className="flex-next"
                            href="/#"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.4s ease 0s",
                              textShadow: "none",
                              color: "rgb(1, 117, 64)",
                              textDecoration: "none",
                              margin: "0px",
                              overflow: "hidden",
                              width: "15px",
                              height: "25px",
                              position: "absolute",
                              top: "50%",
                              zIndex: 10,
                              textIndent: "-100000px",
                              display: "inline-block",
                              opacity: 0,
                              cursor: "pointer",
                              background:
                                'url("https://svhttdl.dongnai.gov.vn/Style%20Library/images/next.png")',
                              right: "50px",
                              backgroundColor: "initial",
                            }}
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="carousel"
                      className="flexslider"
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        margin: "0px",
                        position: "relative",
                        zoom: 1,
                      }}
                    >
                      <div
                        className="flex-viewport"
                        style={{
                          boxSizing: "border-box",
                          transition: "all 1s ease 0s",
                          maxHeight: "2000px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <ul
                          className="slides"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            padding: "0px",
                            listStyle: "none",
                            marginTop: "0px",
                            marginBottom: "0px",
                            zoom: 1,
                            width: "800%",
                            transitionDuration: "0s",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <li
                            className="flex-active-slide"
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              margin: "5px 5px 0px 0px",
                              width: "50px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            {" "}
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                display: "block",
                                width: "50px",
                                opacity: 1,
                                height: "38px",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              margin: "5px 5px 0px 0px",
                              width: "50px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            {" "}
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/song ca Đường tàu mùa xuân.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                display: "block",
                                opacity: 0.5,
                                width: "50px",
                                height: "38px",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              margin: "5px 5px 0px 0px",
                              width: "50px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            {" "}
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/Lãnh đạo tỉnh và Ban Tổ chức tặng cờ lưu niệm cho các đại diện các Đoàn tham dự Lễ phát động.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                display: "block",
                                opacity: 0.5,
                                width: "50px",
                                height: "38px",
                              }}
                            />
                          </li>
                          <li
                            style={{
                              boxSizing: "border-box",
                              lineHeight: 1.3,
                              padding: "0px",
                              listStyle: "none",
                              backfaceVisibility: "hidden",
                              margin: "5px 5px 0px 0px",
                              width: "50px",
                              cssFloat: "left",
                              display: "block",
                            }}
                          >
                            {" "}
                            <img
                              alt=""
                              src="https://svhttdl.dongnai.gov.vn/Hnh nh hot ng/1 Vận động viên Đồng Nai giành Huy chương vàng môn Khiêu vũ.jpg"
                              style={{
                                boxSizing: "border-box",
                                verticalAlign: "middle",
                                border: "none",
                                margin: "0px",
                                padding: "0px",
                                maxWidth: "100%",
                                display: "block",
                                opacity: 0.5,
                                width: "50px",
                                height: "38px",
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                      <ol
                        className="flex-control-nav flex-control-paging"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          listStyle: "none",
                          marginTop: "0px",
                          marginBottom: "0px",
                          width: "100%",
                          position: "absolute",
                          bottom: "-40px",
                          textAlign: "center",
                          display: "none",
                        }}
                      />
                      <ul
                        className="flex-direction-nav"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          padding: "0px",
                          listStyle: "none",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        <li
                          className="flex-nav-prev"
                          style={{ boxSizing: "border-box", lineHeight: 1.3 }}
                        >
                          <a
                            className="flex-prev flex-disabled"
                            href="/#"
                            tabIndex="-1"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.4s ease 0s",
                              textShadow: "none",
                              color: "rgb(1, 117, 64)",
                              textDecoration: "none",
                              margin: "0px",
                              overflow: "hidden",
                              width: "15px",
                              height: "25px",
                              position: "absolute",
                              top: "50%",
                              zIndex: 10,
                              textIndent: "-100000px",
                              display: "inline-block",
                              background:
                                'url("https://svhttdl.dongnai.gov.vn/Style%20Library/images/prev.png")',
                              left: "50px",
                              backgroundColor: "initial",
                              cursor: "default",
                              opacity: 0,
                            }}
                          >
                            Previous
                          </a>
                        </li>
                        <li
                          className="flex-nav-next"
                          style={{ boxSizing: "border-box", lineHeight: 1.3 }}
                        >
                          <a
                            className="flex-next flex-disabled"
                            href="/#"
                            tabIndex="-1"
                            style={{
                              boxSizing: "border-box",
                              transition: "all 0.4s ease 0s",
                              textShadow: "none",
                              color: "rgb(1, 117, 64)",
                              textDecoration: "none",
                              margin: "0px",
                              overflow: "hidden",
                              width: "15px",
                              height: "25px",
                              position: "absolute",
                              top: "50%",
                              zIndex: 10,
                              textIndent: "-100000px",
                              display: "inline-block",
                              background:
                                'url("https://svhttdl.dongnai.gov.vn/Style%20Library/images/next.png")',
                              right: "50px",
                              backgroundColor: "initial",
                              cursor: "default",
                              opacity: 0,
                            }}
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="video"
              className="tab-pane"
              style={{ boxSizing: "border-box", display: "none" }}
            >
              <a
                className="more"
                href="/#"
                style={{
                  boxSizing: "border-box",
                  transition: "all 0.4s ease 0s",
                  textShadow: "none",
                  background: "rgb(245, 245, 245)",
                  backgroundColor: "rgb(245, 245, 245)",
                  display: "block",
                  lineHeight: "28px",
                  textAlign: "right",
                  fontStyle: "italic",
                  paddingRight: "10px",
                  textDecoration: "none",
                  color: "rgb(1, 117, 64)",
                }}
              >
                {"Xem thêm"}
              </a>
              <div
                id="ctl00_g_275f1a92_aaa7_4d62_9f0a_dbe124815cc9"
                style={{ boxSizing: "border-box" }}
              >
                <video
                  id="VideoClip"
                  height={190}
                  width={100}
                  controls
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    verticalAlign: "baseline",
                  }}
                >
                  <source
                    type="video/mp4"
                    src="https://svhttdl.dongnai.gov.vn/media/BLGD_resize.mp4"
                    style={{ boxSizing: "border-box" }}
                  />
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    Hiển thị video clip.
                  </p>
                </video>
              </div>
              <table
                className="s4-wpTopTable"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  boxSizing: "border-box",
                  borderSpacing: "0px",
                  borderCollapse: "collapse",
                  backgroundColor: "transparent",
                  font: "400 14px Arial",
                }}
              >
                <tbody style={{ boxSizing: "border-box" }}>
                  <tr style={{ boxSizing: "border-box" }}>
                    <td
                      style={{
                        boxSizing: "border-box",
                        paddingTop: "3px",
                        paddingBottom: "3px",
                      }}
                    >
                      <div
                        id="WebPartWPQ2"
                        className="noindex"
                        width="100%"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div
                          id="ctl00_g_a39a03d9_a3c6_491d_b79a_e10433c485c3_updatePanelctl00_g_a39a03d9_a3c6_491d_b79a_e10433c485c3"
                          style={{ boxSizing: "border-box" }}
                        >
                          <input
                            id="ctl00_g_a39a03d9_a3c6_491d_b79a_e10433c485c3_ctl01"
                            type="hidden"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              font: "inherit",
                              color: "inherit",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                              lineHeight: "inherit",
                            }}
                          />
                          <table
                            width="100%"
                            style={{
                              boxSizing: "border-box",
                              borderSpacing: "0px",
                              borderCollapse: "collapse",
                              backgroundColor: "transparent",
                            }}
                          >
                            <tbody style={{ boxSizing: "border-box" }}>
                              <tr style={{ boxSizing: "border-box" }}>
                                <td
                                  style={{
                                    boxSizing: "border-box",
                                    paddingTop: "3px",
                                    paddingBottom: "3px",
                                  }}
                                >
                                  <table
                                    width="100%"
                                    cellSpacing="0"
                                    style={{
                                      boxSizing: "border-box",
                                      borderSpacing: "0px",
                                      borderCollapse: "collapse",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <tbody style={{ boxSizing: "border-box" }}>
                                      <tr style={{ boxSizing: "border-box" }}>
                                        <td
                                          width="100%"
                                          style={{
                                            boxSizing: "border-box",
                                            paddingTop: "3px",
                                            paddingBottom: "3px",
                                          }}
                                        >
                                          <a
                                            href="/#"
                                            style={{
                                              boxSizing: "border-box",
                                              backgroundColor: "transparent",
                                              transition: "all 0.4s ease 0s",
                                              textShadow: "none",
                                              textDecoration: "none",
                                              color: "rgb(1, 117, 64)",
                                            }}
                                          >
                                            Tuyên truyền Clip phòng, chống bạo
                                            lực gia đình
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr style={{ boxSizing: "border-box" }}>
                                <td
                                  style={{
                                    boxSizing: "border-box",
                                    paddingTop: "3px",
                                    paddingBottom: "3px",
                                  }}
                                >
                                  <table
                                    width="100%"
                                    cellSpacing="0"
                                    style={{
                                      boxSizing: "border-box",
                                      borderSpacing: "0px",
                                      borderCollapse: "collapse",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <tbody style={{ boxSizing: "border-box" }}>
                                      <tr style={{ boxSizing: "border-box" }}>
                                        <td
                                          width="100%"
                                          style={{
                                            boxSizing: "border-box",
                                            paddingTop: "3px",
                                            paddingBottom: "3px",
                                          }}
                                        >
                                          <a
                                            href="/#"
                                            style={{
                                              boxSizing: "border-box",
                                              backgroundColor: "transparent",
                                              transition: "all 0.4s ease 0s",
                                              textShadow: "none",
                                              textDecoration: "none",
                                              color: "rgb(1, 117, 64)",
                                            }}
                                          >
                                            V/v tăng cường tuyên truyền, phổ
                                            biến pháp luật về khiếu nại, tố cáo
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr style={{ boxSizing: "border-box" }}>
                                <td
                                  style={{
                                    boxSizing: "border-box",
                                    paddingTop: "3px",
                                    paddingBottom: "3px",
                                  }}
                                >
                                  <table
                                    width="100%"
                                    cellSpacing="0"
                                    style={{
                                      boxSizing: "border-box",
                                      borderSpacing: "0px",
                                      borderCollapse: "collapse",
                                      backgroundColor: "transparent",
                                    }}
                                  >
                                    <tbody style={{ boxSizing: "border-box" }}>
                                      <tr style={{ boxSizing: "border-box" }}>
                                        <td
                                          width="100%"
                                          style={{
                                            boxSizing: "border-box",
                                            paddingTop: "3px",
                                            paddingBottom: "3px",
                                          }}
                                        >
                                          <a
                                            href="/#"
                                            style={{
                                              boxSizing: "border-box",
                                              backgroundColor: "transparent",
                                              transition: "all 0.4s ease 0s",
                                              textShadow: "none",
                                              textDecoration: "none",
                                              color: "rgb(1, 117, 64)",
                                            }}
                                          >
                                            V/v tăng cường tuyên truyền phổ biến
                                            pháp luật về phòng, chống ma túy
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            width="100%"
                            cellPadding="4"
                            cellSpacing="0"
                            style={{
                              boxSizing: "border-box",
                              borderSpacing: "0px",
                              borderCollapse: "collapse",
                              backgroundColor: "transparent",
                            }}
                          >
                            <tbody style={{ boxSizing: "border-box" }}>
                              <tr style={{ boxSizing: "border-box" }}>
                                <td
                                  className="ms-paging"
                                  style={{
                                    boxSizing: "border-box",
                                    paddingTop: "3px",
                                    whiteSpace: "nowrap",
                                    paddingLeft: "11px",
                                    paddingRight: "11px",
                                    paddingBottom: "4px",
                                    fontFamily: "tahoma, sans-serif",
                                    fontSize: "8pt",
                                    fontWeight: "normal",
                                    color: "rgb(64, 102, 2)",
                                  }}
                                >
                                  {`1
										 - 3`}
                                  <a
                                    href="/#"
                                    style={{
                                      boxSizing: "border-box",
                                      backgroundColor: "transparent",
                                      transition: "all 0.4s ease 0s",
                                      textShadow: "none",
                                      textDecoration: "none",
                                      color: "rgb(1, 117, 64)",
                                    }}
                                  >
                                    <img
                                      alt="Next"
                                      src="https://svhttdl.dongnai.gov.vn/_layouts/images/next.gif"
                                      style={{
                                        boxSizing: "border-box",
                                        verticalAlign: "middle",
                                        border: "none",
                                        margin: "0px",
                                        padding: "0px",
                                        maxWidth: "100%",
                                        marginBottom: "10px",
                                        height: "15px",
                                        width: "16px",
                                      }}
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="right-top-content"
          style={{
            boxSizing: "border-box",
            border: "1px solid rgb(177, 213, 197)",
            margin: "0px 0px 15px",
          }}
        >
          <h3
            className="title-menuleft rigth-title"
            style={{
              boxSizing: "border-box",
              fontFamily: "inherit",
              padding: "0px 15px",
              margin: "0px",
              background: "rgb(0, 128, 1)",
              overflow: "hidden",
              lineHeight: "32px",
              marginTop: "0px",
              marginBottom: "0px",
              color: "rgb(255, 255, 255)",
              fontSize: "14px",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            <span style={{ boxSizing: "border-box" }}>Một cửa điện tử</span>
          </h3>
          <div
            id="ctl00_g_998289e7_1641_430b_9d64_874c0eff25db"
            style={{ boxSizing: "border-box" }}
          >
            <a
              href="/#"
              target="_blank"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                transition: "all 0.4s ease 0s",
                textShadow: "none",
                textDecoration: "none",
                color: "rgb(1, 117, 64)",
              }}
            >
              {" "}
              <div
                id="eGate_DivCityWebMain"
                style={{
                  boxSizing: "border-box",
                  padding: "10px 25px 15px",
                  color: "rgb(31, 73, 125)",
                  textAlign: "center",
                }}
              >
                {" "}
                <div
                  className="eGate_DivCityWebTitle0"
                  style={{
                    boxSizing: "border-box",
                    font: "bold 14px Arial",
                    marginBottom: "4px",
                  }}
                >
                  Tháng 12 năm 2023
                  <br style={{ boxSizing: "border-box" }} />
                  Sở Văn hóa, Thể thao và Du lịch{" "}
                  <br style={{ boxSizing: "border-box" }} /> đã giải quyết
                </div>{" "}
                <div
                  id="eGate_DivCityWebTyle"
                  style={{
                    boxSizing: "border-box",
                    font: "bold 35px / 35px Arial",
                    color: "red",
                    marginTop: "20px",
                  }}
                >
                  <span
                    id="dnn_ctr508_CityWebSupport_lblPercent"
                    style={{ boxSizing: "border-box" }}
                  >
                    97.01
                  </span>
                  %
                </div>{" "}
                <div
                  className="eGate_DivCityWebTitle"
                  style={{
                    boxSizing: "border-box",
                    color: "rgb(31, 73, 125)",
                    marginTop: "20px",
                    font: "bold 14px Arial",
                    marginBottom: "4px",
                  }}
                >
                  hồ sơ đúng hẹn
                </div>{" "}
                <div
                  className="eGate_DivCityWebTitle1"
                  style={{
                    boxSizing: "border-box",
                    font: "12px Arial",
                    color: "rgb(85, 85, 85)",
                  }}
                >
                  (Tự động cập nhật lúc{" "}
                  <span
                    id="dnn_ctr508_CityWebSupport_lblTime"
                    style={{ boxSizing: "border-box" }}
                  >
                    19:07:11 ngày 27/12/2023
                  </span>
                  )
                </div>{" "}
              </div>
            </a>
          </div>
        </div>
        <div
          className="menu-left menu-banner"
          style={{
            boxSizing: "border-box",
            margin: "0px 0px 20px",
            padding: "0px",
            borderRadius: "3px",
            background: "none",
            border: "none",
          }}
        >
          <div
            id="linkweb"
            className="collapse"
            style={{
              boxSizing: "border-box",
              overflow: "hidden",
              display: "block",
              height: "auto",
            }}
          >
            <div
              className="banner-right"
              style={{ boxSizing: "border-box", margin: "20px 0px 10px" }}
            >
              <div
                id="ctl00_g_28411690_c3ae_483d_aef6_e116c55767fd"
                style={{ boxSizing: "border-box" }}
              />
            </div>
            <div
              className="banner-l"
              style={{
                boxSizing: "border-box",
                background: "rgb(255, 255, 255)",
                margin: "15px 0px",
              }}
            >
              <div
                id="ctl00_g_4d4df192_6cd8_487b_a22e_f5438ebb6d6e1"
                style={{ boxSizing: "border-box" }}
              >
                <a
                  href="/#"
                  target="_blank"
                  title="http://caicachhanhchinh.dongnai.gov.vn/Pages/home.aspx"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={320}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/_w/TAP SAN T8-2016_jpg.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
                <a
                  href="/#"
                  target="_blank"
                  title="http://www.thethaodongnai.vn/index.php"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={312}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/_w/THE THAO_jpg.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
                <a
                  href="/#"
                  target="_blank"
                  title="http://ttxtdldongnai.vn/home/index.php"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={320}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/_w/Du lich Dong nai_jpg.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
                <a
                  href="/#"
                  target="_blank"
                  title="Chuyên mục du lịch huyện Xuân Lộc"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={220}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/DuLichXuanLoc.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
                <a
                  href="/#"
                  target="_blank"
                  title="Cổng thông tin điện tử pháp điển"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={59}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/Cổng thông tin điện tử pháp điển.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
                <a
                  href="/#"
                  target="_blank"
                  title="Ứng dụng i-Speed đo tốc độ truy cập Internet Việt Nam"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    transition: "all 0.4s ease 0s",
                    textShadow: "none",
                    textDecoration: "none",
                    color: "rgb(1, 117, 64)",
                  }}
                >
                  <img
                    alt=""
                    height={81}
                    width={292}
                    src="https://svhttdl.dongnai.gov.vn/PictureLinks/i-Speed.jpg"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      border: "none",
                      padding: "0px",
                      maxWidth: "100%",
                      margin: "0px 0px 5px",
                      width: "100%",
                      maxHeight: "320px",
                      marginBottom: "10px",
                    }}
                  />
                </a>
                <br style={{ boxSizing: "border-box" }} />
              </div>
            </div>
          </div>
        </div>
        <h3
          className="title-menuleft menu-title"
          aria-expanded="false"
          href="/#"
          role="button"
          style={{
            boxSizing: "border-box",
            fontFamily: "inherit",
            fontWeight: 500,
            cursor: "pointer",
            padding: "0px 15px",
            margin: "0px",
            background: "rgb(0, 128, 1)",
            overflow: "hidden",
            fontSize: "15px",
            textTransform: "none",
            lineHeight: "32px",
            marginTop: "0px",
            marginBottom: "0px",
            color: "rgb(255, 255, 255)",
            textAlign: "center",
          }}
        >
          Liên kết website
        </h3>
        <div
          className="bg_menu"
          style={{
            boxSizing: "border-box",
            background: "rgb(245, 245, 245)",
            padding: "5px",
          }}
        >
          <div
            id="ctl00_g_144ed5fb_9c2b_492f_a35b_46377b581774"
            style={{ boxSizing: "border-box" }}
          >
            <select
              name="ctl00$g_144ed5fb_9c2b_492f_a35b_46377b581774$ctl00"
              style={{
                boxSizing: "border-box",
                margin: "0px",
                font: "inherit",
                color: "inherit",
                textTransform: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                width: "100%",
              }}
            >
              <option value="0" style={{ boxSizing: "border-box" }}>
                -- Website thường dùng --
              </option>
              <option
                value="http://www.bvhttdl.gov.vn/"
                style={{ boxSizing: "border-box" }}
              >
                Bộ Văn hóa, Thể thao và Du lịch
              </option>
              <option
                value="http://vietnamtourism.gov.vn/index.php/guides/39"
                style={{ boxSizing: "border-box" }}
              >
                Tổng Cục Du lịch
              </option>
              <option
                value="https://dangkykinhdoanh.gov.vn/"
                style={{ boxSizing: "border-box" }}
              >
                Cổng TT Đăng ký kinh doanh
              </option>
              <option
                value="http://hdnd.dongnai.gov.vn/Pages/home.aspx"
                style={{ boxSizing: "border-box" }}
              >
                Hội đồng Nhân dân tỉnh Đồng Nai
              </option>
              <option
                value="http://congan.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Công an tỉnh Đồng Nai
              </option>
              <option
                value="http://dongnai.gdt.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Cục thuế Đồng Nai
              </option>
              <option
                value="http://dncustoms.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Cục Hải quan Đồng Nai
              </option>
              <option
                value="http://stttt.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Thông tin và Truyền thông
              </option>
              <option
                value="http://stp.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Tư pháp
              </option>
              <option
                value="http://ngoaivu.dongnai.gov.vn/Pages/home.aspx"
                style={{ boxSizing: "border-box" }}
              >
                Sở Ngoại vụ
              </option>
              <option
                value="http://sonongnghiep.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Nông nghiệp và Phát triển Nông thôn
              </option>
              <option
                value="http://snv.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Nội Vụ
              </option>
              <option
                value="http://sgddt.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Giáo dục và Đào tạo
              </option>
              <option
                value="http://sct.dongnai.gov.vn/"
                style={{ boxSizing: "border-box" }}
              >
                Sở Công thương
              </option>
              <option
                value="http://www.dost-dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Khoa học và Công nghệ
              </option>
              <option
                value="http://syt.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Y tế
              </option>
              <option
                value="http://dpidongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Kế hoạch và Đầu tư
              </option>
              <option
                value="http://sxd.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Sở Xây dựng
              </option>
              <option
                value="http://diza.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Ban quản lý các khu công nghiệp
              </option>
              <option
                value="https://svhttdl.dongnai.gov.vn/_layouts/viewlsts.aspx"
                style={{ boxSizing: "border-box" }}
              >
                SVHTTDL
              </option>
              <option
                value="http://tuyengiao.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Ban Tuyên giáo
              </option>
              <option
                value="http://hoinongdan.dongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Hội Nông dân tỉnh
              </option>
              <option
                value="http://bhxhdongnai.gov.vn"
                style={{ boxSizing: "border-box" }}
              >
                Bảo hiểm Xã hội tỉnh
              </option>
              <option
                value="http://thanhtra.dongnai.gov.vn/Pages/default.aspx"
                style={{ boxSizing: "border-box" }}
              >
                Thanh tra tỉnh
              </option>
              <option
                value="https://www.dongnai.gov.vn/Pages/news.aspx?CatId=153"
                style={{ boxSizing: "border-box" }}
              >
                Lịch làm việc của lãnh đạo tỉnh
              </option>
              <option
                value="http://ubmttq.dongnai.gov.vn/pages/default.aspx"
                style={{ boxSizing: "border-box" }}
              >
                UBMTTQ VN TỈNH ĐN
              </option>
              <option
                value="http://qlvb-tthcc.dongnai.gov.vn/"
                style={{ boxSizing: "border-box" }}
              >
                QLVB TTHCC
              </option>
            </select>
          </div>
        </div>
        <div
          className="r_select hitcounter collapse"
          style={{
            boxSizing: "border-box",
            display: "block",
            textAlign: "center",
          }}
        >
          <h3
            className="title-menuleft menu-title"
            style={{
              boxSizing: "border-box",
              fontFamily: "inherit",
              fontWeight: 500,
              padding: "0px 15px",
              margin: "0px",
              background: "rgb(0, 128, 1)",
              overflow: "hidden",
              fontSize: "15px",
              textTransform: "none",
              lineHeight: "32px",
              marginTop: "0px",
              marginBottom: "0px",
              color: "rgb(255, 255, 255)",
              textAlign: "center",
            }}
          >
            {" "}
            Số lượt truy cập
          </h3>
          <div
            className="bg_menu"
            style={{
              boxSizing: "border-box",
              background: "rgb(245, 245, 245)",
              padding: "5px",
            }}
          >
            <div
              id="ctl00_g_236c5dc2_7da8_4e44_937e_4a7fc77ed6f9"
              style={{ boxSizing: "border-box" }}
            >
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/6.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/6.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/5.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/5.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/5.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
              <img
                alt=""
                src="https://svhttdl.dongnai.gov.vn/Style Library/images/7.png"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  border: "none",
                  margin: "0px",
                  maxWidth: "100%",
                  padding: "10px 4px 4px",
                  height: "50px",
                  width: "30px",
                }}
              />
            </div>{" "}
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  min-height: 100%;
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font: 12px / 18px Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  line-height: 18px;
}
`,
        }}
      />
    </>
  );
}
