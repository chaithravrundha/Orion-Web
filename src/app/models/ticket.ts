export interface Ticket {
    Id: number;
    CreatedBy: string;
    Created: Date;

    /*
    get Status(): Enumerable {
        if (!this.Tags) return null;
        let codes = TicketStatus.All.map<string>(e => e.Code);
        let found = this.Tags.filter(e => codes.includes(e.Code));
        if (!found.length) return null;
        return found[0];
    }

    get Priority(): Enumerable {
        if (!this.Tags) return null;
        let codes = TicketPriority.All.map<string>(e => e.Code);
        let found = this.Tags.filter(e => codes.includes(e.Code));
        if (!found.length) return null;
        return found[0];
    }

    get Method(): Enumerable {
        if (!this.Tags) return null;
        let codes = TicketMethod.All.map<string>(e => e.Code);
        let found = this.Tags.filter(e => codes.includes(e.Code));
        if (!found.length) return null;
        return found[0];
    }

    get Direction(): Enumerable {
        if (!this.Tags) return null;
        let codes = TicketDirection.All.map<string>(e => e.Code);
        let found = this.Tags.filter(e => codes.includes(e.Code));
        if (!found.length) return null;
        return found[0];
    }
    */

    PhoneNumber: string;
    Caller: string;
    selected: boolean;
    /*
    Tags: Tag[] = [];
    Tasks: Task[] = [];
    */
}