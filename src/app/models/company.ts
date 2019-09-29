export interface IReadCompany {
    name: string;
    personnel: number;
    rating: number;
}

export interface ICompany {
    company: IReadCompany;
    getCompanyName(): string;
    getCompanyPersonnel(): number;
}
