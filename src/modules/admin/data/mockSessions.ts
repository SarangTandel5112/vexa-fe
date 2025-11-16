export interface Session {
    id: string;
    sessionName: string;
    createdOn: string;
    completedOn: string;
    respondents: number;
    listenerId: string;
    status: "completed" | "active" | "pending";
}

export const mockSessions: Session[] = [
    {
        id: "1",
        sessionName: "BG6767",
        createdOn: "25 Jan 2024",
        completedOn: "25 Jan 2024",
        respondents: 5,
        listenerId: "DF1245",
        status: "completed",
    },
    {
        id: "2",
        sessionName: "BG6768",
        createdOn: "26 Jan 2024",
        completedOn: "26 Jan 2024",
        respondents: 8,
        listenerId: "DF1246",
        status: "completed",
    },
    {
        id: "3",
        sessionName: "BG6769",
        createdOn: "27 Jan 2024",
        completedOn: "27 Jan 2024",
        respondents: 12,
        listenerId: "DF1247",
        status: "active",
    },
    {
        id: "4",
        sessionName: "BG6770",
        createdOn: "28 Jan 2024",
        completedOn: "28 Jan 2024",
        respondents: 6,
        listenerId: "DF1248",
        status: "completed",
    },
    {
        id: "5",
        sessionName: "BG6771",
        createdOn: "29 Jan 2024",
        completedOn: "-",
        respondents: 3,
        listenerId: "DF1249",
        status: "pending",
    },
    {
        id: "6",
        sessionName: "BG6772",
        createdOn: "30 Jan 2024",
        completedOn: "30 Jan 2024",
        respondents: 10,
        listenerId: "DF1250",
        status: "completed",
    },
];
