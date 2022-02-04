import React from 'react'

type NavbarProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handleSerched: (event: any) => void
}

const Navbar = ({ setIsOpen, handleSerched }: NavbarProps) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input onChange={handleSerched} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary ms-2" onClick={(e) => { e.preventDefault(); setIsOpen(true)}}>Create</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
