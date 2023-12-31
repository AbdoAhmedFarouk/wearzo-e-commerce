import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

// eslint-disable-next-line react/prop-types
function PageTitle({ text }) {
  return (
    <div
      className="mb-[30px] bg-fifthColor py-[14.5px]
    text-primaryColor"
    >
      <Container
        styles="text-center md:flex md:items-center
        md:justify-between"
      >
        <h2
          className="text-sm font-medium uppercase leading-5
        md:text-base md:leading-5"
        >
          {text}
        </h2>

        <ul
          className="flex items-center justify-center
        gap-6 text-sm capitalize
        md:justify-between md:gap-4"
        >
          <li
            className="relative before:absolute before:-right-4
            before:top-0 before:text-sm before:content-['/']
            md:before:-right-3"
          >
            <NavLink className="hover:text-thirdColor" to="/">
              home
            </NavLink>
          </li>

          <li>
            <a className="hover:text-thirdColor" href="#">
              {text}
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default PageTitle;
