import { User } from "./user";
import { Status } from "./status";

export class Article
{
    id: string;
    author: User;
    currentCollaborators: Array<User>;
    name: string;
    content: string;
    status: Status;
    edits: Status[];
    editable: boolean;
}

