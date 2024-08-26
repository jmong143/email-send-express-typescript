export const E_BAD_REQUEST = 'Bad request';

export const errorMessage = (error: any) => {
    let message: string;
    if (error instanceof Error) {
        message = error.message
    } else {
        message = String(error)
    }
    return message;
};