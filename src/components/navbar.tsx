import React, { useEffect, useRef } from 'react'
import { BACKGROUND, BUTTONS } from '../constants/colors'

const imgStyle = { height: 32 }
const buttonsCommon = {borderRadius: 14, border: 'none',  fontWeight:'bold'}

const searchInput = { borderRadius: 14, boxShadow: '4px 1px 15px -8px rgba(0,0,0,0.69)', border: 'none' }
const createButton = {...buttonsCommon,  background: BUTTONS, color: BACKGROUND}


type NavbarProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handleSerched: (event: any) => void,
    setIsSearching: (event: boolean) => void
}

const Navbar = ({ setIsOpen, handleSerched, setIsSearching }: NavbarProps) => {

    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const identifier = setTimeout(() => {
            handleSerched(searchRef.current?.value);
        } ,500)

        return () => {
          clearTimeout(identifier);
          setIsSearching(true)
        }
    
      }, [searchRef.current?.value])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Uniswap_Logo.svg" alt="Italian Trulli" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input onChange={handleSerched} ref={searchRef} style={searchInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary ms-2" style={createButton}  onClick={(e) => { e.preventDefault(); setIsOpen(true)}}>Create</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
