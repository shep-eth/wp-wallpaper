import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [tokenId, setTokenId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    if (!tokenId) {
      alert("Empty token id, please try again!");
      return;
    }

    const tokenIdNumber = parseInt(tokenId, 10)
    if (tokenIdNumber < 1 || tokenIdNumber > 10000) {
      alert("Invalid token id, please try again!");
      return;
    }

    setIsSubmitting(true);
    router.push(`/${tokenId}`);
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>WonderPals Wallpaper Generator</title>
        <meta
          name="description"
          content="Generator your own WonderPals wallpaper!"
        />
      </Head>

      <main className="mx-auto text-center w-64">
        <Image
          src="https://cdn.shopify.com/s/files/1/0637/4513/0718/files/WonderPals_Shop_Logo_700x.png"
          alt="WonderPals"
          width={350}
          height={164}
        />
        <div className="py-32">
          <input
            className="block w-64 text-center h-12 border border-gray-400"
            type="number"
            min="1"
            max="10000"
            placeholder="Enter your token id here..."
            onChange={(e) => setTokenId(e.target.value)}
            value={tokenId}
          />
          <button
            className="block w-64 text-center mt-6 bg-black text-white py-2 rounded-full"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating..." : "Generate Wallpaper!"}
          </button>
        </div>
      </main>

      <footer className="mx-auto text-center p-12 text-gray-500">
        <p>
          Built by{" "}
          <a
            href="https://twitter.com/shep_eth"
            target="_blank"
            rel="noreferrer"
          >
            shep
          </a>{" "}
          with ❤️
        </p>
      </footer>
    </>
  );
};

export default Home;
