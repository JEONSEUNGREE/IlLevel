import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";
import { main } from "../util/CommonUri";

export default function LoginPage() {
    const [, setCookie] = useCookies(['account_token']);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accountToken = searchParams.get('account_token');
    
        if (accountToken) {
          setCookie('account_token', accountToken, { path: '/' }); // 모든 경로에서 쿠키 사용
          navigate(main);
        }
      }, [searchParams, setCookie, navigate]);

    return (
        <div>
            <h2>로그인 중...</h2>
            <Outlet/>
        </div>
  );
}
