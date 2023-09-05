
const NavItem = ({name}) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
      <span
        className="
          text-blue-500
          absolute
          transition-all
          duration-500
          font-bold
          right-0
          top-0
          group-hover:right-[90%]
          opacity-0
          group-hover:opacity-100
        "
      >
        /
      </span>
    </li>
  );
};

export default NavItem;
