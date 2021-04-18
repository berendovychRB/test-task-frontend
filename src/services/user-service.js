import axios from "axios";

export default class UserService {

    _apiBase = 'http://127.0.0.1:8000/api';

    async getResource(url) {

        const res = await axios.get(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();

    }

    _transformUser = (user) => {
        return {
            id: user.id,
            username: user.username,
            created: user.created,
            group: user.group
        };
    }

    getAllUsers = async () => {
        const res = await this.getResource(`/users/`);
        return res.results.map(this._transformUser);
    }

    


}