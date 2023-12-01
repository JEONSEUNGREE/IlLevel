import { useState, useEffect, useRef } from "react";

export default function modal(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { isOpen, openModal, closeModal, modalRef };
}
