import Image from "next/image";
export default function About() {
  return (
    <div className="bg-blur contact-card m-8 p-[2.5rem]">
      <h1 className="pageTitle uppercase under text-[4.5rem] leading-[7rem] mb-10 ml-4 mt-4">
        About
      </h1>
      <div className="flex row justify-between">
        <div className="pl-8 w-[80em] ml-5 text-justify">
          <p className="text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            lobortis ante ut enim vehicula, nec hendrerit ex aliquam. Sed nec
            varius elit. Integer hendrerit eleifend diam, id fermentum urna
            lacinia ac. Aenean venenatis luctus tortor vel sollicitudin. Duis
            vitae faucibus tellus, non tincidunt lectus. Phasellus convallis dui
            in sagittis fermentum. Etiam in hendrerit leo. Mauris accumsan enim
            nunc. Sed rhoncus quam vel nulla accumsan, ut aliquam odio pretium.
            Morbi non lorem quis nibh convallis interdum at ut mauris. Cras
            ullamcorper dolor est, vitae rutrum arcu dapibus vel.
          </p>
          <button>Dowload CV</button>
        </div>
      </div>
    </div>
  );
}
