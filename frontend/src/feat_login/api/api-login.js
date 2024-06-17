import { call } from "../../api/ApiService";

export function signin(userDTO) {
    return call("/api/parent/login", "POST", userDTO)
        .then((reponse) => {
            if( reponse.token ) {
                localStorage.setItem("ACCESS_TOKEN", reponse.token);
                window.location.href = "/chatbot"; // /chatbot으로 위치 변경하기
            }
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/api/parent/signup", "POST", userDTO);
}