
import * as React from 'react';

const MenuContext = React.createContext({ open: true });

function menuReducer(state, action) {
    switch (action.type) {
        case 'change': {
            return { ...state, open: !state.open };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function MenuProvider({ children }) {
    const [state, dispatch] = React.useReducer(menuReducer, {
        open: true
    });
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch };
    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
}

function useMenu() {
    const context = React.useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a MenuProvider');
    }
    return context;
}

export { MenuProvider, useMenu };