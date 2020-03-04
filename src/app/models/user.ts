import { Role } from "./role";
import { Article } from "./article";

export class User
{
    id: string;
    name: string;
    articles: Article[];
    role: Role;
}