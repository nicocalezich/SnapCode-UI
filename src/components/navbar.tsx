import React, { useEffect, useRef } from 'react'

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SnapCode</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input onChange={handleSerched} ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary ms-2" onClick={(e) => { e.preventDefault(); setIsOpen(true)}}>Create</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
