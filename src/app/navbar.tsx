export default function NavBar() {
  /* TODO
   * Hover animations
   * Rout links
   * Try several separator options
   */

  return (
    <nav
      className="
          flex justify-end gap-10 
          m-0 mt-2 px-5
          absolute right-0 left-0 z-10
          font-semibold text-[#dadfe2]
        "
    >
      <a className="mr-auto">HOME</a>
      <a>ABOUT</a>
      <span className="font-black">•</span>
      <a>PROJECTS</a>
      <span className="font-black">•</span>
      <a>CONTACT</a>
    </nav>
  );
}
