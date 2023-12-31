import { Link } from "react-router-dom"
import { ButtonSearch, UlSearchContainer } from "."
import { BASE_URL } from "../../constants/const"
import { Movie } from "../../models/types"
import { SearchProps } from "../Header/types"

export const SearchResults = ({ data, searchTerm, cleanInput, clearInputValue }: SearchProps) => {
  const handleLiClick = () => {
    clearInputValue(); 
  }

  return (
    <>
      {data && searchTerm.length >= 3 && (
        <UlSearchContainer>
          {data.slice(0, 5).map((result: Movie) => (
            <Link onClick={handleLiClick} className="link" key={result.id} to={`/${result.type}/${result.id}`}>
              <li>
                <img width={100} src={`${BASE_URL}${result.backdrop_path}`} alt="result" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '1rem' }}>{result.title || result.name}</p>
                  <p style={{ fontSize: '.8rem' }}>{result.description}</p>
                </div>
              </li>
            </Link>))}
          <ButtonSearch>More films</ButtonSearch>
          {cleanInput && <p>Buscando...</p>}
        </UlSearchContainer>
      )}
    </>
  )
}