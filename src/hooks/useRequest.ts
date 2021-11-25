import {useState} from "react";
import {Data, Request} from "../types/api";

// hook used to get data and provide information about errors and loading
export const useRequest = (
    promise: Request,
    initialLoading = false,
    onSuccess = (data: Data) => {
    },
    onError = (error: Error) => {
    },
) => {

    const [state, setState] = useState({
        isLoading: initialLoading,
        error: null,
        data: null,
    });

    //function to call in the component, saves the data and handles loading state
    const request: () => void = async () => {
        setState({isLoading: true, error: null, data: state.data});
        try {
            const response = await promise();
            setState({isLoading: false, error: null, data: response.data});
            onSuccess(response);
        } catch (error) {
            setState({isLoading: false, error, data: null});
            onError(error);
        }
    };

    return {request, state};
};
