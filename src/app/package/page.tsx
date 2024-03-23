import Image from "next/image";
import React from "react";

function LandingPage() {
  return (
    <div>
      <main>
        <section className="package-hero">
          <Image src="./package1.jpg" alt="北九州市の風景" />
          <div className="package-text">
            <h1>パッケージ１</h1>
            <p>
              おいしい食事、快適な宿泊場所、魅力的な観光地をご用意しました。
            </p>
          </div>
        </section>
        <section>
          <div className="intro">
            <h2>食事</h2>
            <p>
              北九州市には、豊かな自然に恵まれた環境で育った新鮮な食材を使った、様々な名物料理があります。
            </p>
          </div>
          <ul>
            <li>
              <h3>八幡ぎょうさ</h3>
              <p>
                八幡ぎょうさは、北九州市八幡地区の名物料理です。小麦粉の生地を細く伸ばし、豚挽き肉、キャベツ、ニラなどの具材を詰めて揚げた、もちもちの食感が楽しめる餃子です。
              </p>
              <Image src="./food1.jpg" alt="八幡ぎょうさ" />
            </li>
            <li>
              <h3>やきうどん</h3>
              <p>
                やきうどんは、北九州市を代表する家庭料理です。ソース味の濃い目の味付けが特徴で、キャベツ、モヤシ、豚肉などの具材が入っています。弾力のある食感と香ばしい香りがクセになる一品です。
              </p>
              <Image src="./food2.jpg" alt="やきうどん" />
            </li>
          </ul>
        </section>

        <section>
          <div className="intro">
            <h2>宿泊</h2>
            <p>
              北九州市には、快適な設備と温かなおもてなしの心で旅行者をお迎えする、様々なホテルがあります。
            </p>
          </div>
          <ul>
            <li>
              <h3>ホテル モンテレーネ 小倉</h3>
              <p>
                JR小倉駅直結の好立地にあり、清潔で機能的な客室と充実した設備を備えたシティホテル。ビジネスや観光の拠点に最適です。
              </p>
              <Image src="./hotel1.jpg" alt="ホテル モンテレーネ 小倉" />
            </li>
            <li>
              <h3>リソル 生月ヶ浦</h3>
              <p>
                別府湾を一望できる絶景の宿。開放的な露天風呂や、美味しい会席料理で贅沢なひとときをお過ごしいただけます。
              </p>
              <Image src="./hotel2.jpg" alt="リソル 生月ヶ浦" />
            </li>
          </ul>
        </section>

        <section>
          <div className="intro">
            <h2>観光</h2>
            <p>
              北九州市には、自然、歴史、文化など、様々な魅力的な観光スポットがあります。
            </p>
          </div>
          <ul>
            <li>
              <h3>旧三菱小倉鉱業所</h3>
              <p>
                国の重要文化財に指定されている産業遺産。当時の生産設備が保存され、産業革命期の生活や技術を垣間見ることができます。
              </p>
              <Image src="./trip1.jpg" alt="旧三菱小倉鉱業所" />
            </li>
            <li>
              <h3>皿倉山</h3>
              <p>
                標高314mの小高い山で、山頂からは北九州市内や関門海峡を一望できる絶景が広がります。ハイキングコースも整備されています。
              </p>
              <Image src="./trip2.jpg" alt="皿倉山" />
            </li>
          </ul>
        </section>
        <section className="cta">
          <h2>パッケージ1で楽しくワーキングしませんか?</h2>
          <p>
            北九州市で、おいしい食事、快適な宿泊、そして魅力的な観光を堪能しながら、働いてみませんか?
          </p>
          <a href="/form" className="cta-btn">
            お申し込み
          </a>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
