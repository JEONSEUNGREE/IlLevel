import React from "react";
import centerLogo from "../img/main/centerLogo.svg";
import { useRecoilValue } from "recoil";
import { navListState } from "../state/layout/NavBarState";
import NavForm from "./NavForm";

export default function NavBar() {
    const navList = useRecoilValue(navListState);

    return (
        <div>
            <nav className="main-navbar-pos">
                <img
                    className="main-header-left-logo"
                    src={centerLogo}
                    alt="TripPenguinLogo"
                />
                {navList.map((item) => (
                    <NavForm item={item} key={item.navName} />
                ))}
            </nav>
        </div>
    );
}
