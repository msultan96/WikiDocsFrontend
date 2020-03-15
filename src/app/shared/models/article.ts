import { Status } from "./status";
import { User } from './user';

export class Article
{
    id: string;
    emailId: string;
    name: string;
    content: string;
    status: Status;
    rejectedCount: number;
    readOnly: boolean;
}

