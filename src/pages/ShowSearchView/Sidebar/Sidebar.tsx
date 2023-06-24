import styled from "styled-components"
import { SidebarMain } from "."
import { filterOptions } from "../../../constants/const"

interface SidebarProps {
  selectedCategory: string
  setSelectedCategory: any
}

export const HeaderSidebar = styled.div`
  width: 100%;

  img{
    width: 100%;
    height: 200px;
    filter: brightness(.6) contrast(1.3); 
    object-fit: contain;
  }
`

export const SidebarLi = styled.li`
  
`

export const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <>
      <SidebarMain>
        <HeaderSidebar>
          <img src="onepiece.jpg" alt="header sidebar" />
        </HeaderSidebar>
        <h3>Nuestras categorias</h3>
        <ul>
          {filterOptions.map((value) => {
            return (
              <li
                style={{ backgroundColor: selectedCategory === value.value ? "#48c3db" : '', color: '#fff', width: '100%' }}
                onClick={() => setSelectedCategory(value.value)}
                key={value.label}
              >
                <p>{value.label}</p>
              </li>
            )
          })}
        </ul>
        <div style={{ margin: '0 auto' }}>
          Copyright 2023 @TMDB
        </div>
      </SidebarMain>
    </>
  )
}