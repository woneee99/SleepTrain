"use client";

import Image from "next/image";
import coin from "/public/images/coin.svg";
import food from "/public/images/cutlery.svg";
import friend from "/public/images/friend.svg";
import poo from "/public/images/poop.svg";
import nightmare from "/public/images/nightmare.svg";
import sheep from "/public/images/sheep.svg";
import styles from "./page.module.css";
import NavBottom from "@/components/NavBottom";
import { useState } from "react";
import PrimaryButton from "@/components/button/PrimaryButton";

export default function Dream() {
  const [dream, setDream] = useState("");
  const dreams = ["돈/재물", "음식", "지인", "똥", "악몽", "기타"];
  const images = [coin, food, friend, poo, nightmare, sheep];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <b>꿈</b>
      </div>
      <div className={styles.note_container}>
        <div className={styles.next}>
          <PrimaryButton>오늘 꾼 꿈 작성하기</PrimaryButton>
        </div>
      </div>
      <NavBottom />
    </div>
  );
}
