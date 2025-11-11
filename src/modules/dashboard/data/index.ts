import { Step, Question } from "../types";

export const homeSteps: Step[] = [
    {
        id: 1,
        label: "AI Guided Q & A",
        description:
            "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
        id: 2,
        label: "Approx. 1 hr",
        description:
            "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
    {
        id: 3,
        label: "100% Confidential",
        description:
            "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    },
];

export const sampleQuestions: Question[] = [
    { text: "What brand do you trust more?" },
    { text: "Tell us about your last user experience." },
    { text: "Would you recommend it to a friend?" },
];
