import React, { useState } from "react";
import { FaAngleDown, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import "./Navbar.css";
//import Dropdown from './Dropdown';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Riby Cobanking
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Riby  Agent  Network
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Cooper
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            RibyGo
          </a>
        ),
      }
    ]}
  />
);

const business = (
  <Menu
    items={[
      {
        label: (
          //  <a target="_blank" rel="noopener noreferrer" href="">

          <Link to='/Cooperative'> Cooperative Management</Link>
          //  </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Agent  Business Network
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            Financial Inclusion Programs
          </a>
        ),
      }
    ]}
  />
);

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);




  return (
    <>
      <div className="marze">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src="/Logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul>
            <li className="nav-item">
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()} style={{ fontWeight: "500" }}>
                  <Space>
                    Products
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li
              className="nav-item"
            >
              <Dropdown overlay={business}>
                <a onClick={(e) => e.preventDefault()} style={{ fontWeight: "500" }}>
                  <Space>
                    Business
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
