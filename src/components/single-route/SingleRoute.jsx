"use client";
import "../single-route/SingleRoute.css";
import Image from "next/image";
import rating from "@/assets/rating.svg";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Radio from "@mui/material/Radio";
import { Pagination, Autoplay } from "swiper/modules";
import hero3 from "@/assets/hero3.png";
import hero2 from "@/assets/hero2.png";
import hero1 from "@/assets/hero1.png";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

const SingleRoute = ({ datum }) => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="single">
      <div className="container">
        <div className="single_contents">
          <aside>
            <div className="images">
              <div className="img">
                <Image
                  alt="product"
                  width={400}
                  height={350}
                  src={datum.image}
                />
              </div>
              <div className="others">
                <Image alt="product" width={85} height={85} src={datum.image} />
                <Image alt="product" width={85} height={85} src={datum.image} />
                <Image alt="product" width={85} height={85} src={datum.image} />
                <Image alt="product" width={85} height={85} src={datum.image} />
              </div>
            </div>
            <div className="desc">
              <div className="aside_title">
                <h3> {datum.title} </h3>
                <div className="ratings">
                  <Image alt="rating" width={80} height={12} src={rating} />
                  <p>{datum.rating.count} reviews</p>
                  <p>
                    <span>Submit a review</span>
                  </p>
                </div>
              </div>
              <div className="aside_title">
                <div className="aside_price">
                  <h4>${datum.price}</h4>
                  <p>
                    <span>${datum.price * 1.5} </span>
                    24% Off
                  </p>
                  <div className="acces">
                    <ul>
                      <li>Availability</li>
                      <li>Category</li>
                      <li>Free Shipping</li>
                    </ul>
                    <ul>
                      <li>In Stock</li>
                      <li> {datum.category} </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="aside_title">
                <div className="size">
                  <p>Select Color:</p>
                  <div>
                    <Radio
                      {...controlProps("a")}
                      sx={{
                        color: "red",
                        "&.Mui-checked": {
                          color: "red",
                        },
                      }}
                    />
                    <Radio
                      {...controlProps("c")}
                      sx={{
                        color: "blue",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                      }}
                    />
                    <Radio
                      {...controlProps("b")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />

                    <Radio
                      {...controlProps("e")}
                      sx={{
                        color: "yellow",
                        "&.Mui-checked": {
                          color: "yellow",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="size">
                  <p>Size</p>
                  <select name="size">
                    <option value="XS">XS</option>
                    <option value="XXL">XXL</option>
                    <option value="M">M</option>
                  </select>
                </div>
              </div>
              <div className="aside_title">
                <div className="aside_carts">
                  <div className="counter">
                    <button>-</button>
                    <h5>2</h5>
                    <button>+</button>
                  </div>
                  <div className="wish_cart">
                    <button>
                      <IoCartOutline />
                      Add To Card
                    </button>
                    <button>
                      <IoHeartOutline />
                    </button>
                  </div>
                </div>
              </div>
              <div className="share">
                <button>
                  <Image alt="facebook" width={8} height={16} src={Facebook} />
                  Share on Facebook
                </button>
                <button>
                  <Image alt="facebook" width={12} height={16} src={Twitter} />
                  Share on Twitter
                </button>
              </div>
            </div>
          </aside>
          <div className="bside">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image alt="product" width={400} height={350} src={hero1} />
                <p>
                  {datum.price} <span>{datum.price * 2}</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="product" width={400} height={350} src={hero2} />
                <p>
                  {datum.price} <span>{datum.price * 2}</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="product" width={400} height={350} src={hero3} />
                <p>
                  {datum.price} <span>{datum.price * 2}</span>
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="product" width={400} height={350} src={hero3} />
                <p>
                  {datum.price} <span>{datum.price * 2}</span>
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
