export interface Todo {
  id: string;
  text: string;
  date: string;
  time: string;
  repeatFrequency: string;
  repeatTime: number;
  completed: boolean;
}