export interface SupportCategory {
    id: number;
    name: string;
}

enum statusName {'Nieuw', 'Toegewezen', 'In behandeling', 'Afgerond', 'Gesloten'}

export interface SupportStatus {
    id: number;
    name: statusName;
}

enum Priority {'low', 'medium', 'high'};

export interface SupportTicket {
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

export interface SupportComment {
    id: number;
    ticket_id: number;
    user_id: number;
    comment: string;
    created_at: string;
    updated_at: string;
}

export interface CreateTicketData {
    user_id: number;
    category_id: number;
    subject: string;
    description: string;
    priority: Priority;
}

export interface AddUserToTicketData {
    ticket_id:number;
    user_id: number;
}

export interface AddCommentToTicketData {
    ticket_id:number;
    user_id: number;
    comment: string;
}

export interface UpdateCommentToTicketData {
    id: number;
    comment: string;
}

export interface TicketFilterParams {
    user_id?: number;
    status_id?: number;
    category_id?: number;
    priority?: Priority;
    created_at?: string; // Formaat: YYYY-MM-DD
}

export interface UpdateTicketStatusData {
    id:number;
    status_id: number;
}

export interface UpdateTicketPriorityData {
    id:number
    priority: Priority;
}
