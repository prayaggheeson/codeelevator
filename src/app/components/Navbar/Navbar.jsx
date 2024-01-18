"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbarsup";
import { cn } from "../../utils/cn";
import Image from "next/image";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Image
          src="/CElogo.png"
          alt=""
          width={150}
          height={150}
          className="mx-auto object-cover"
        />

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Coin Development"
              href="https://algochurn.com"
              src="/coindevelopment.png"
              description="Pioneered Digital Currencies For The Crypto Market!"
            />
            <ProductItem
              title="Core Blockchain Development"
              href="https://tailwindmasterkit.com"
              src="/blockchaindevelopment.png"
              description="Unlock The Power Of Decentralization"
            />
            <ProductItem
              title="DApp"
              href="https://gomoonbeam.com"
              src="/dapp.png"
              description="With Custom Dapps Businesses Can Grow"
            />
            <ProductItem
              title="Cryto Exchange"
              href="https://userogue.com"
              src="/crytoexchange.png"
              description="Enter the market with the best-in-class crypto exchange development services"
            />
            <ProductItem
              title="Smart contract"
              href="https://userogue.com"
              src="/smartcontract.png"
              description="Transparency is something you should embrace without fear!"
            />
            <ProductItem
              title="Cryto Token"
              href="https://userogue.com"
              src="/token.png"
              description="Superior Token Development Services"
            />
            <ProductItem
              title="Wallet Development"
              href="https://userogue.com"
              src="/wallet.png"
              description="Securely Receive, Pay, and Store Money"
            />
            <ProductItem
              title="Web 3.0 Development"
              href="https://userogue.com"
              src="/web3development.png"
              description="Decentralized Web Solutions That Facilitate Your Access And Participation"
            />
            <ProductItem
              title="Play & Earn"
              href="https://userogue.com"
              src="/play&earn.png"
              description="Our Experts Integrate Games with Web3 Wallets"
            />
            <ProductItem
              title="NFT"
              href="https://userogue.com"
              src="/NFT.png"
              description="We Craft User-Friendly Marketplaces for Buying and Selling"
            />
            <ProductItem
              title="Metaverse"
              href="https://userogue.com"
              src="/metaverse.png"
              description="Build larger-than-life, immersive & real 3D experiences for your customers"
            />
            <ProductItem
              title="NFT Gaming & NFT RealEstate"
              href="https://userogue.com"
              src="/nftgaming.png"
              description="We lead in the latest NFT gaming tech & NFT RealEstate"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
