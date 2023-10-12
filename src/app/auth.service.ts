export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                
                if(this.loggedIn) {
                    resolve(this.loggedIn);
                }

                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 1000)
            }
        )
        return promise;
    }

    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}