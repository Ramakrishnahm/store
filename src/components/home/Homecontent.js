import FeatureProducts from "./FeatureProducts";


function Image() {
  return (
    <div className="contentimages">
      <div>
        <img
          src=
          "https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"

          alt="furniture"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src=
          "https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"

          alt="furniture"
          loading="lazy"
          height="420px"
          width="60px"
        />
      </div>
      <div>
        <img
          src=
          "https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"

          alt="furniture"
          loading="lazy"
          height="420px"
          width="60px"
        />
      </div>
      <div>
        <img
          src=
          "https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"

          alt="furniture"
          loading="lazy"
          height="420px"
          width="60px"
        />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="content">
      <h1>We are changing the way people shop</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        repellat explicabo enim soluta temporibus asperiores aut obcaecati
        perferendis porro nobis.
      </p>
      <button className="contentbtn">
        <a href="#">our products</a>
      </button>
    </div>
  );
}


function Home() {
  return (
    <>
      <Image />
      <Content />
      <FeatureProducts />
    </>
  )
}

export default Home;