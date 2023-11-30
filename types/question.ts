import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

export type Question = {
    ID: string;
    question: string;
    option1: number;
    option2: number;
    option3: number;
    option4: number;
    correctOption: number;
    category: string;
    level: number;
};