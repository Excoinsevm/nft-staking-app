import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Dog NFTs - Staking</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new Dawg</h2>
          <p className={styles.selectBoxDescription}>
            Use the NFT Drop Contract to claim you Dawg.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your Dawg</h2>
          <p className={styles.selectBoxDescription}>
            Use this <b>Staking Tool</b>{" "}
            to stake your Dawgs, and earn $DOG tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
