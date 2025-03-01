export interface User {
  id: string;
  name: string;
  email: string;
  weight?: number;
  height?: number;
  goals?: UserGoals;
}

export interface UserGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  servingSize: number;
  timestamp: Date;
}