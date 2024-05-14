export interface Menu {
    name: string;
    icon: string;
    url: string;
    role: string;
    subItems?: Menu[];
}
