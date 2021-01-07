export default function isAuthenticated() {
    return localStorage.getItem('TOKEN') ? true : false;
}