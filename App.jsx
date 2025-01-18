import Login from './components/login';
import NewUser from './components/newuser';
import Logout from './components/logout';
import { getIronSession } from 'iron-session';
import Cookies from './misc/cookies';
import { cookieName, password } from './misc/session';

export default async function App() {

    const session = await getIronSession( new Cookies(), { cookieName, password } );    
    return <div>{session.username ? <Logout /> : <><Login /><NewUser /></>}</div>;
}
