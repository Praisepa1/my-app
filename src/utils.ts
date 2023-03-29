export const shuffuleArray = (array: any[]) => 
[...array].sort(() => Math.random() - 0.5);