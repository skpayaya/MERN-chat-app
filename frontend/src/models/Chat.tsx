import { GroupAdmin } from "./GroupAdmin";
import { User } from "./User";

export interface Chat {
    isGroupChat: boolean;
    users: User[];
    _id: string;
    chatName: string;
    groupAdmin: GroupAdmin;
}
