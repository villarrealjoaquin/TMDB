import { Link } from "react-router-dom"
import { InputSearch, NavBarLeft, NavBarRight, Navv, SearchResults, Ul } from ".."
import { AiOutlineSearch } from "react-icons/ai"
import { useScroll } from "../../hooks";
import { NavProps } from "./types";

export const Nav = ({ searchTerm, data, setSearchTerm }: NavProps) => {
  const scroll = useScroll();
  return (
    <>
      <Navv scrolled={scroll}>
        <NavBarLeft>
          <Link className='link' to='/'>
            <img src="logo.png" alt="" />
          </Link>
          <Ul>
            <Link className='link' to='/'>
              <li>
                Home
              </li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Movies</li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Series</li>
            </Link>
            <Link className='link' to='/movies'>
              <li>Anime</li>
            </Link>
            <li>My List</li>
          </Ul>
        </NavBarLeft>
        <NavBarRight>
          <div>
            <InputSearch
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search..."
            />
            {/* <Link to='/movies'>
                <ButtonRight>Sign out</ButtonRight>
              </Link> */}
            <AiOutlineSearch />
            <SearchResults
              data={data}
              searchTerm={searchTerm}
            />
          </div>
        </NavBarRight>
      </Navv>
    </>
  )
}