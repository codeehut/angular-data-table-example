export type Project = {
    project: {
        name: string;
        company: string;
        logo: string;
    },
    author: {
        name: string;
        role: string;
        avatar: string;
    },
    progress: number;
    deadline_in_days: number;
}
