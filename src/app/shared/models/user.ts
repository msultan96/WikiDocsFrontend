import { Role } from "./role";
import { Article } from "./article";

export class User
{
    id: string;
    email: string;
    password: string;
		name: string;
		articles: Article[];
		collaboratingArticles: [];
    role: Role;
}