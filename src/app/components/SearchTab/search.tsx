"use client";
import Image from "next/image";
import styles from "./search.module.css";
import Banner from "../../../../public/Images/Mask group-red.svg";
import Dropdown from "../../../../public/Images/dropdown.svg";
import search from "../../../../public/Images/search-bar.svg";
import AppStore from "../../../../public/Images/app-store.svg";
import GoogleStore from "../../../../public/Images/google-app.svg";
import phone from "../../../../public/Images/phoneIcon.svg";
import Available from "../../../../public/Images/contact.svg";
import Available1 from "../../../../public/Images/contact2.svg";

import { useState } from "react";

export const Search = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = (e: any) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsActive(true);
  };

  return (
    <>
      <div className={styles.searchBackground}>
        <Image
          className={styles.image}
          src={Banner}
          alt="search-background"
          width={1280}
          height={227}
        />

        <div className={styles.smallButtonContainer}>
          <div className={styles.smallButton}>
            <Image src={phone} alt="phone" width={35} height={40} />
            <div className={styles.contact}>
              <Image src={Available} alt="phone" width={35} height={40} />
              <Image src={Available1} alt="phone" width={30} height={20} />
            </div>
          </div>
        </div>
        <div className={styles.breadcrumb}>
          <ul>
            <li>
              <a href="" onClick={() => setIsActive(false)}>
                Same as Pick-Up
              </a>
            </li>
            <li>
              <a href="" onClick={handleClick}>
                Different Drop-Off
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDropdown}>
                Select vehicle type
                <Image src={Dropdown} alt="dropdown" width={7} height={10} />
              </a>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="#">Vehicle 1</a>
                  <a href="#">Vehicle 2</a>
                  <a href="#">Vehicle 3</a>
                </div>
              )}
            </li>
          </ul>
          <div className={styles.inputs}>
            {isActive ? (
              <>
                <input
                  type="text"
                  placeholder="Al Quao"
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Al Quao"
                  className={styles.input}
                />
              </>
            ) : (
              <input
                type="text"
                placeholder="Al Quao"
                className={styles.input}
              />
            )}
            <div className={styles.datetimewrapper}>
              <input
                type="datetime-local"
                id="datetime-input"
                className={styles.input}
              />
              <input
                type="datetime-local"
                id="datetime-input"
                className={styles.input}
              />
            </div>
            <div className={styles.searchBar}>
              <Image src={search} alt="search" width={25} height={25} />
            </div>
            <div className={styles.divider}></div>
            <button className={styles.button}>Quick book</button>
          </div>
          <div className={styles.download}>
            <div className={styles.arrange}>
              <p>Download our App for easy accessibility anytime, anywhere!</p>
              <Image src={AppStore} alt="app-store" width={0} height={30} />
              <Image
                src={GoogleStore}
                alt="google-store"
                width={0}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
