interface AppNavigationItem {
    id: string;
    title: string;
    type: 'item';
    icon?: string;
    url?: string;
}

export const navigation: AppNavigationItem[] = [
    {
        id: 'menu1',
        title: 'منو 1',
        type: 'item',
        icon: 'apps',
        url: '/'
    }
];
