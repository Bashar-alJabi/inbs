import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, restoreOnUnmount: boolean = true) => {
    const previousTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;

        return () => {
            if (restoreOnUnmount) {
                document.title = previousTitle.current;
            }
        };
    }, [title, restoreOnUnmount]);
};