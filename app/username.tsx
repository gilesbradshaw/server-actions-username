'use client';

import { useRef } from "react";
import { useUsername } from "./use-username";
import { UsernameStatus } from "./username-status";

export function Username() {

    const formRef = useRef(null);

    const { username, usernameError, addUsernameAction } = useUsername(formRef);

    return (
        <section className="m-10">
            <h1 className="text-2xl border-b-2 border-black my-3">Add a Username</h1>
            <form className="flex flex-col gap-3" ref={formRef} action={addUsernameAction}>
                <input className="border border-sky-700 p-3" type="text" name="username" placeholder="Username" />
                {usernameError &&
                    <p className="text-red-500 text-xs my-2">
                        {usernameError}
                    </p>
                }
                <button className="bg-sky-700 text-white mt-3" type="submit">Add</button>
                <p>Current Username: {username}</p>
                <UsernameStatus />
            </form>
        </section>
    );
}