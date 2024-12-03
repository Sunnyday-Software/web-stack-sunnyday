
const anonymousUser: IUser = {
    id: "7e052a59-6c82-415a-8d04-a115d9b9f867",
    profiles: [
        {
            displayName: "Anonymous",
            theme: "system",
        }
    ]
}

class UserSession {
    
    user: IUser;
    
    constructor() {
        this.user = anonymousUser;
    }
    
    setUser(user: IUser) {
        this.user = user;
    }
    
    
}