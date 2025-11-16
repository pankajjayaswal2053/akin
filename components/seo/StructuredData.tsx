import React, { useEffect } from 'react';

interface StructuredDataProps {
  schema: object;
}

const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
    useEffect(() => {
        const scriptId = 'structured-data-json-ld';
        // FIX: Cast the element returned by `getElementById` to `HTMLScriptElement` to correctly type the `script` variable.
        // This allows access to the `type` property without TypeScript errors, as the component ensures that any element with this ID will be a script tag.
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (!script) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = scriptId;
            document.head.appendChild(script);
        }

        script.innerHTML = JSON.stringify(schema);

        return () => {
            const scriptToRemove = document.getElementById(scriptId);
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };

    }, [schema]);

    return null;
};

export default StructuredData;