import FeaturesLinks from "./components/FeaturesLinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <h1>Hidden Gems!</h1> */}
      {/* <Register /> */}
      <div className="m-3 w-full">
        <FeaturesLinks />
      </div>
    </div>
  );
}
