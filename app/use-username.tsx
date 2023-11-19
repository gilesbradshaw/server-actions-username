import { useState, type MutableRefObject, useOptimistic } from "react";
import { addUsername } from "./add-username";

export function useUsername(formRef: MutableRefObject<HTMLFormElement | null>) {

    const [usernameError, setUsernameError] = useState('');
    const [username, setUsername] = useState('');
    const [optimisticUsername, setOptimisticUsername] = useOptimistic(username);

    return {
        username: optimisticUsername,
        usernameError,
        addUsernameAction: async (formData: FormData) => {

            const { username } = Object.fromEntries(formData);

            formRef.current?.reset();
            setUsernameError('');

            if (typeof username !== 'string') {
                // validation done on server for this example
                return;
            }
            setOptimisticUsername('client-' + username);

            const result = await addUsername(formData);

            if (!result.success) {
                setUsernameError(result.error);
                return;
            }
            setUsername(result.username);
        }
    };
};