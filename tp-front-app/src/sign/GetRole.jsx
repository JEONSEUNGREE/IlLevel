export default function GetRole() {
    const cookie = document.cookie;
    const splitCookie = cookie.split("; ");

    const findToken = splitCookie.find((cookie) =>
        cookie.startsWith("account_token="),
    );

    if (findToken) {
        const accountToken = findToken.split("=")[1];
        const splitToken = atob(accountToken.split(".")[1]);
        const parseToken = JSON.parse(splitToken);
        const userRole = parseToken.authority;
        return userRole;
    }

    return "";
}
