import { useFormStatus } from "react-dom";

export function UsernameStatus() {

    const status = useFormStatus();

    return (
        <pre>
            <p>Status: {JSON.stringify(status, null, 2)}</p>
        </pre>
    );
}