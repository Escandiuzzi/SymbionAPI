export function validateDotEnv() {
    
    if (process.env['SERVER_PORT'] == null)
        throw Error("Server Port Not Found!")

    }
