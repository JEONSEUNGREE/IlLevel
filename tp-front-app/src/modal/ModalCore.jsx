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

export function backdropModal(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // 스크롤 방지
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = ""; // 스크롤 해제
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
            document.body.style.overflow = ""; // 스크롤 해제
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden"; // 스크롤 방지
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = ""; // 스크롤 해제
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = ""; // 컴포넌트 언마운트 시 스크롤 해제
        };
    }, [isOpen]);

    return { isOpen, openModal, closeModal, modalRef };
}
