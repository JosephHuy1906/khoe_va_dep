"use client";
import {
  Avatar,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcctive, setIsAcctive] = useState(1);

  const menuItems = [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Sản phẩm",
      href: "/products",
    },
    {
      title: "Về chúng tôi",
      href: "/about",
    },
  ];
  return (
    <Navbar
      className={cx("header")}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/images/logo.png"
            alt="logo-icon"
            width={500}
            loading="lazy"
            height={500}
            className={cx("avatar")}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isAcctive === 3 ? true : false}>
          <Link
            href="/products"
            // className={cx(isAcctive === 3 ? "isAcctive" : "")}
            onClick={() => setIsAcctive(3)}
          >
            Sản phẩm
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isAcctive === 1 ? true : false}>
          <Link
            href="/"
            aria-current="page"
            // className={cx(isAcctive === 1 ? "isAcctive" : "")}
            onClick={() => setIsAcctive(1)}
          >
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isAcctive === 2 ? true : false}>
          <Link
            href="about"
            // className={cx(isAcctive === 2 ? "isAcctive" : "")}
            onClick={() => setIsAcctive(2)}
          >
            Về chúng tôi
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            style={{ background: "#226D2A", color: "white" }}
            variant="flat"
          >
            Liên hệ
          </Button>
        </NavbarItem>
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
