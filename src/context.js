import { useState, createContext, useMemo, useContext } from 'react';

const initialState = {
    loading: true,
    data: null
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(initialState.loading);
    const [data] = useState(initialState.data);

    const memoedState = useMemo(() => {
        return {
            loading,
            setLoading,
            data
        }
    }, [loading, data]);

    return (
        <AppContext.Provider value={memoedState}>
            {children}
        </AppContext.Provider>
    )
}

const useApp = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useApp }