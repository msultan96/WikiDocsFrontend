import { Status } from "./status";

export class Article
{
    id: string;
    channelId: string;
    emailId: string;
    name: string;
    content: string;
    status: Status;
    rejectedCount: number;
    editable: boolean;
}

