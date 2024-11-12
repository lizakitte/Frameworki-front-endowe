import { useContext } from "react";
import AppContext from "../data/AppContext";

function useData() {
    return useContext(AppContext).dispatch;
}

export default useData;