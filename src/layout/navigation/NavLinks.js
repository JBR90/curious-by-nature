import React from "react";

const NavLinks = () => {
  return (
    <>
      <a
        href="/one"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark px-4 "
      >
        One
      </a>
      <a
        href="/two"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark px-4  "
      >
        Two
      </a>
      <a
        href="/three"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark px-4 "
      >
        Three
      </a>
    </>
  );
};

export default NavLinks;
