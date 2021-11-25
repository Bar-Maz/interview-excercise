export type Data = Array<object>;

export interface RequestState {
    isLoading: Boolean,
    error: Error | undefined,
    data: Data | undefined,
}