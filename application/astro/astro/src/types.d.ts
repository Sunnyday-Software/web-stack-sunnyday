type IUser = {
    id: string;
    email?: string;
    password?: string;
    profiles?: UserProfile[];
}

type IUserProfile = {
    displayName?: string;
    profilePictureUrl?: string;
    theme: "light" | "dark" | "system";
}

type INavigation = {
    identifier: string;
    items: INavigationItem[];
    
}

type INavigationItem = {
    to: string;
    label: string;
}