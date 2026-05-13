import { Course } from "./course";

export const locations: string[] = ["台北", "新竹", "台中", "高雄"];

/**
幫我根據以下 interface 產生一個 export const courses: Course[] = [] 的陣列內容 2 筆，courseId的格式類似 U2447，首字字母，四個數字
export interface Course {
    courseId: string;
    courseName: string;
    hours: number;
    startDate?: Date;
    endDate?: Date;
    location?: string;
    staffEmail?: string;
    description?: string;
    isActive?: boolean;
}
    **/


export const courses: Course[] = [
    {
        courseId: "U2447",
        courseName: "基礎 TypeScript 開發",
        hours: 24,
        startDate: new Date("2024-08-05"),
        endDate: new Date("2024-08-09"),
        location: "台北",
        staffEmail: "tutor1@example.com",
        description: "介紹 TypeScript 基礎語法與專案開發流程",
        isActive: true,
    },
    {
        courseId: "U2448",
        courseName: "前端框架實戰",
        hours: 30,
        startDate: new Date("2024-10-15"),
        endDate: new Date("2024-10-19"),
        location: "新竹",
        staffEmail: "tutor2@example.com",
        description: "以實例練習 Vue/React 元件開發與狀態管理",
        isActive: false,
    },
];
