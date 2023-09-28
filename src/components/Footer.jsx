function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-50 p-5 text-center">
      <h3 className="sm:text-3xl mb-2 text-2xl font-semibold">
        &copy; Ryan Ray Portfolio
      </h3>
      <span className="sm:text-xl block mb-1 text-lg text-gray-200">
        2020-{new Date().getFullYear()}
      </span>
      <p className="sm:text-xl text-lg text-gray-200">All rights reserved</p>
    </footer>
  );
}

export default Footer;
