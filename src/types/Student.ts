export type Student =  {
  id: string;
  name: string;
  surname: string;
  email: string;
  age: Number;
  weight: Number;
  height: Number;
  photo?: Photo;
  createdAt: Date;
  updatedAt: Date;
  showExclamation?: boolean;
}

type Photo = {
  id: string;
  originalName: string;
  fileName: string;
  filePath: string;
}
