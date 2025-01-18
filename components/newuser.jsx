"use client"

import { useActionState } from 'react';
import { actionNewUser } from '../actions/user.mjs';

export default function NewUser() {

    const [stateNewUser, modActionNewUser] = useActionState(actionNewUser, {
        userCode: null 
    });

    return <div>
        <form method="post" action={modActionNewUser}>
        <input type="submit" value="New User!" /><br />
        { stateNewUser.userCode ? "User code: " + stateNewUser.userCode : "" }        
        </form>
        </div>;
}
