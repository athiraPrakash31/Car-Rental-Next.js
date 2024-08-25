"use client";
import styles from "./booking.module.css";
import Image from "next/image";
import Dropdown from "../../../../public/Images/dropdown-mob.svg";
import { useState } from "react";

export const Booking = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (e:any) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  const handleClick = (e:any) => {
    console.log("dropdown");
    
    e.preventDefault();
    setIsActive(true);
  };

  const handleClickButton = (e:any) => {
    e.preventDefault();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.book}>
        <div className={styles.button}>
          <button className={styles.car} onClick={handleClickButton}>
            Book a car
          </button>
          <button className={styles.quick}>Quick book</button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <li>
              <button className={styles.link} onClick={() => setIsActive(false)}>
                Same as Pick-Up
              </button>
            </li>
            <li>
              <button className={styles.link} onClick={handleClick}>
                Different Drop-Off
              </button>
            </li>
            <li>
              <button className={styles.link} onClick={toggleDropdown}>
                Select vehicle type &nbsp;
                <Image src={Dropdown} alt="dropdown" width={7} height={10} />
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button className={styles.dropdownLink}>Vehicle 1</button>
                  <button className={styles.dropdownLink}>Vehicle 2</button>
                  <button className={styles.dropdownLink}>Vehicle 3</button>
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
          </div>
        </div>
      )}
    </>
  );
};
