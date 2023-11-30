const serverUrl = "http://192.168.56.1:4000/api";
const user = "/user";
const question = "/questions"
const userEndpoint = serverUrl + user;
const quizQuestions = serverUrl + question;

export const endpoints = {
    register: userEndpoint + "/register",
    login: userEndpoint + "/login",
}

export const queryKeys = {
    question: quizQuestions + "/questionRegister",
}