export type ChatError = {
    error: {
        message: string;
        code: number | null;
        param: string;
        type: string;
    } | null
}
