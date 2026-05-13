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
        courseId: "U2447", courseName: "Angular Part1",
        hours: 28,
        startDate: new Date("2024-07-09"), endDate: new Date("2024-07-12"),
        location: "台北", staffEmail: "u2447@uuu.com.tw",
        description: "這個課程將讓您深入了解Angular框架的基礎知識和應用技巧。一開始，會帶您認識Angular框架，包括如何安裝開發環境和工具，以及探索專案的結構和常用指令集。", 
        isActive: true
    },
    {
        courseId: "U2448", courseName: "Angular Part2",
        hours: 28,
        startDate: new Date("2024-07-09"), endDate: new Date("2024-07-12"),
        location: "台北", staffEmail: "u2448@uuu.com.tw",
        description: "首先，課程中將探討Angular中的非同步機制，討論Observable和RxJS之間的關係，並比較Promise和async/await，以了解它們在Angular中的運作原理及應用場景。", 
        isActive: true
    },
]

