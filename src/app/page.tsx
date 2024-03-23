"use client";

import React from "react";
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
    imageUrl: "/hotel1.jpg",
    title: "リッチモンドホテル北九州駅前",
    description:
      "北九州市小倉北区に位置するビジネスホテル。JR北九州駅から徒歩約2分とアクセスが良く、ビジネスや観光の拠点に最適です。",
  },
  {
    id: 2,
    imageUrl: "/hotel2.jpg",
    title: "ホテルリブマックス北九州",
    description:
      "北九州市門司区にある快適なホテル。門司港レトロエリアや海峡ゆめタワーへのアクセスが便利です。",
  },
  {
    id: 3,
    imageUrl: "/hotel3.jpg",
    title: "ステーションホテル小倉",
    description:
      "北九州市小倉北区にあるホテル。JR小倉駅から徒歩約1分と交通の便が良く、小倉城や西日本総合展示場へのアクセスも良好です。",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pt-10">
      <h1 className="mb-4 text-3xl font-bold">施設一覧</h1>
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
    </div>
  );
}
