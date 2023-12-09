import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import SignInEmail from "./SignInEmail";
import modal from "../modal/ModalCore";

const SearchForm = ({ item }) => {
    const { isOpen, openModal, closeModal, modalRef } = modal(false);

    const handleRedirect = () => {
        if (item.component) {
            openModal(true);
        } else {
            window.location.href = item.path;
        }
    };

    return (
        <>
            <li className={styles.sign_modal_li} onClick={handleRedirect}>
                <img
                    className={styles.sign_modal_img}
                    src={`./img/modal/sign${item.id + 1}.png`}
                />
                {item.signInName}
                
            </li>
            {isOpen && 
                <div className={styles.modal} ref={modalRef}>
                    <SignInEmail closeModal={closeModal} />
                </div>
            }
        </>
    );
};

SearchForm.propTypes = {
    item: PropTypes.object,
};

export default SearchForm;
