"use client";

import Image from "next/image";
import React from "react";
import ChatUi from "@/components/ChatUi";
import FacilityCard from "@/components/FacilityCard";

interface Facility {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    imageUrl: "/package2.jpg",
    title: "製造業向けのIT企業パッケージ",
    description:
      "製造業向けのIT企業にとって理想的なリフレッシュとインスピレーションを提供するための、特別なワーケーションパッケージです。製造業のイノベーションとビジネスの発展を支援するために、レンタルオフィス、ホテル、特産品、製造工場の観光などを含んでいます。",
  },
  {
    id: 2,
    imageUrl: "/package2.jpg",
    title: "採用目的のIT企業パッケージ",
    description:
      "採用目的のIT企業にとって理想的なリフレッシュとインスピレーションを提供するための、特別なワーケーションパッケージです。製造業のイノベーションとビジネスの発展を支援するために、レンタルオフィス、ホテル、特産品、大学の来校などを含んでいます。",
  },
  {
    id: 3,
    imageUrl: "/package2.jpg",
    title: "それ以外の目的の方向けのパッケージ",
    description:
      "それ以外の目的の方にとって理想的なリフレッシュとインスピレーションを提供するための、特別なワーケーションパッケージです。製造業のイノベーションとビジネスの発展を支援するために、レンタルオフィス、ホテル、特産品、観光などを含んでいます。",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pt-10">
      <Image src="/home.jpg" alt="北九州市" width={1200} height={800} />
      <h1 className="mb-4 pt-10 text-3xl font-bold">パッケージ一覧</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            imageUrl={facility.imageUrl}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
      <ChatUi />
    </div>
  );
}
