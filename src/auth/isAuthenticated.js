export default function isAuthenticated() {
    return localStorage.getItem('Session') ? true : false;
}