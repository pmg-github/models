interface Category {
    id: number;
    name: string;
}

enum statusName {'Nieuw', 'Toegewezen', 'In behandeling', 'Afgerond', 'Gesloten'}

interface Status {
    id: number;
    name: statusName;
}

enum Priority {'low', 'medium', 'high'};

interface Ticket {
    id: number;
    user_id: number;
    category_id: number;
    status_id: number;
    subject: string;
    description: string;
    priority: Priority;
    created_at: string;
    updated_at: string;
}

interface Comment {
    id: number;
    ticket_id: number;
    user_id: number;
    comment: string;
    created_at: string;
    updated_at: string;
}

interface CreateTicketData {
    user_id: number;
    category_id: number;
    subject: string;
    description: string;
    priority: Priority;
}

interface AddUserToTicketData {
    ticket_id:number;
    user_id: number;
}

interface AddCommentToTicketData {
    ticket_id:number;
    user_id: number;
    comment: string;
}

interface UpdateCommentToTicketData {
    id: number;
    comment: string;
}

interface TicketFilterParams {
    user_id?: number;
    status_id?: number;
    category_id?: number;
    priority?: Priority;
    created_at?: string; // Formaat: YYYY-MM-DD
}

interface UpdateTicketStatusData {
    id:number;
    status_id: number;
}

interface UpdateTicketPriorityData {
    id:number
    priority: Priority;
}
