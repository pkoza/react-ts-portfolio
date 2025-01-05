import {toast} from "react-toastify";

const messages = {
    error: (text: string) => {
        toast.error(<pre className="text-sm font-sans font-bold">{text}</pre>)
    }
}
export default messages;
