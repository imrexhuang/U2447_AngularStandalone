export interface Course {
    courseId: string;   
    courseName: string; 
    hours: number;  
    startDate?: Date;
    endDate?: Date;
    location?: string;
    staffEmail?: string; 
    description?: string;
    isActive?:boolean;
}
