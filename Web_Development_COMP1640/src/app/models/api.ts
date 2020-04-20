export class Api{
    nameApi: string;
    content: string;
}

// Staff
export const getStaff = {nameApi:'getStaffApi', api:'http://localhost:8080/staffs',}


// Tutor
export const getTutor = {nameApi:'getStudentApi', api:'http://localhost:8080/tutors'}


// Student
export const getStudent = {nameApi:'getStudentApi', api:'http://localhost:8080/students'}


// Class
export const addClass = {nameApi:'addClassApi', api:'http://localhost:8080/classes'}
export const getClass = {nameApi:'getClassApi', api:'http://localhost:8080/classes'}
export const getNumberStudentOfTutor = {nameApi: 'getNumberStudentOfTutorApi', api: 'http://localhost:8080/tutors/students'}


// Dashboard-staff
export const getNumberOfStudent = {nameApi:'getNumberOfStudentApi', api:'http://localhost:8080/students/total'}
export const getNumberOfTutor = {nameApi:'getNumberOfTutorApi', api:'http://localhost:8080/tutors/total'}

export const getNumberOfMess = {nameApi:'getNumberOfMessApi', api:'http://localhost:8080/messages/7day'}
export const getAverageTutorMess = {nameApi: 'getAverageTutorMessApi', api: 'http://localhost:8080/messages/average-tutor'}
export const getAverageStudentMess = {nameApi: 'getAverageStudentMessApi', api: 'http://localhost:8080/messages/average-student'}

export const getNumberOfStudentNoTutor = {nameApi:'getNumberOfStudentNoTutorApi', api:'http://localhost:8080/students/total-undeclared'}

export const getStudentNonInteraction = {nameApi:'getStudentNonInteractionApi', api:'http://localhost:8080/students/no-interaction'}

export const getStudentUndeclared = {nameApi: 'getStudentUndeclaredApi', api: 'http://localhost:8080/students/undeclared'}


// Login
export const getUser = {nameApi:'getUserApi', api:'http://localhost:8080/login'}


// Schedule
export const getSchedule ={nameApi: 'getScheduleApi', api: 'http://localhost:8080/schedules'};

// Messages
export const getMessage = {nameApi: 'getMessageApi', api:'http://localhost:8080/messages'}

