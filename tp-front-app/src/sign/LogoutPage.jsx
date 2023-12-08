import React, {useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { main } from "../util/CommonUri";

export default function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const removeCookie = (name) => {
            document.cookie = `${name}=; expires=Tue, 22 Feb 1994 19:44:00 GMT; path=/;`;
          };
          
        removeCookie('account_token');
        localStorage.clear();
        navigate(main);
      }, [navigate]);

    return (
        <div>
            <h2>로그아웃 중...</h2>
            <Outlet/>
        </div>
  );
}
