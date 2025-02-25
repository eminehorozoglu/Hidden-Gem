
import FeaturesLinks from "./components/FeaturesLinks";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <h1>Hidden Gems!</h1> */}
      {/* <Register /> */}
      <Hero />
      <FeaturesLinks />
    </div>
  );
}
