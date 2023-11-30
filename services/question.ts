import axios from 'axios';

import { endpoints } from '../constants';
import { Question } from '../types/question';
import { handleError } from '../utils/handleError';

type DataRes = { data: Question };

export const getQuestion = async (question: string, correctOption: number) => {
    try {
        const {data}: DataRes = await axios.get(endpoints.question,{
            question,
            correctOption
        });
        if (data) return data;
        return null;
    } catch (error) {
        handleError(error);
    }
}