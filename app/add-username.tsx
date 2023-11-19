type AddUsername = {
    success: false;
    error: string;
} | {
    success: true;
    username: string;
};

export async function addUsername(
    formData: FormData
): Promise<AddUsername> {
    const { username } = Object.fromEntries(formData);

    if (!username || typeof username !== 'string' || username.length < 2) {
        return {
            success: false,
            error: 'Username must be at a valid string of at least 2 characters'
        };
    }

    // simulate adding to database
    await new Promise((res) => setTimeout(res, 1000));

    return {
        success: true,
        username: 'server-' + username
    };
}