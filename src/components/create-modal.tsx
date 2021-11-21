import React, { useRef, useState } from 'react'
import { Button, Modal as BModal } from 'react-bootstrap'
import Repos from '../types/repos'

type ModalProps = {
    isOpen: boolean
    handleClose: () => void
    createRepos: (repo: Repos) => void
}

const Modal = ({ isOpen, handleClose, createRepos }: ModalProps) => {

    const titleRef = useRef(null as any)
    const codeRef = useRef(null as any)

    const sendCreateProps = () => {
        const title = titleRef.current.value
        const code = codeRef.current.value

        createRepos({title,code})
        handleClose()
    }

    return (
        <BModal show={isOpen} onHide={handleClose}>
            <BModal.Header closeButton>
                <BModal.Title>Crear repo</BModal.Title>
            </BModal.Header>

            <BModal.Body>
                <form className="row g-3">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input ref={titleRef} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Code</label>
                        <textarea ref={codeRef} className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                    </div>
                    {/* TODO TAGS */}
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Tags</label>
                        <input className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </form>
            </BModal.Body>

            <BModal.Footer>
                <Button variant="secondary">Close</Button>
                <Button onClick={sendCreateProps} variant="primary">Save changes</Button>
            </BModal.Footer>
        </BModal>

    )
}

export default Modal
