import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-100">
          Welcome to our blog! We are passionate about sharing our thoughts and
          knowledge with you. Our goal is to provide valuable content that
          informs, inspires, and entertains. Whether you're a seasoned reader
          or new to our blog, we hope you find something valuable here.
        </p>
        <p className="text-gray-100">
          Our team consists of dedicated writers and enthusiasts who love to
          explore various topics, including technology, travel, lifestyle,
          entertainment, and more. We believe in the power of words to inspire
          and make a positive impact.
        </p>
        <p className="text-gray-100">
          Feel free to explore our blog and discover articles that resonate with
          you. If you have any questions or suggestions, we'd love to hear from
          you. Thank you for being a part of our journey!
        </p>
      </div>
    </>
  );
}
