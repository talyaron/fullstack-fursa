import axios from 'axios';

interface userIF {
    email?: string;
    pass?: string;
}

export function fetchUser(user: userIF) {
    return new Promise<{ data: any }>(async (resolve, rejected) => {
        try {
            const response = await axios.post('/user/login', {
                body: JSON.stringify({ email: user.email?.toLowerCase(), pass: user.pass })
            })
            const data = await response.data;
            if (data.ok) {
                const userData = data.user;
                localStorage.setItem('userInfo', JSON.stringify(userData));
                resolve({ data: userData });
            }
            else {
                rejected({ data: {} });
            }
        } catch (error: any) {
            rejected(error.response.data)
        }
    });
}