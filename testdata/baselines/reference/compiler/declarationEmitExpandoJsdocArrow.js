//// [tests/cases/compiler/declarationEmitExpandoJsdocArrow.ts] ////

//// [declarationEmitExpandoJsdocArrow.ts]
/**
 * JSDoc comment on ExpandoArrowInlineNamedExport
 */
export const ExpandoArrowInlineNamedExport = () => {};
ExpandoArrowInlineNamedExport.args = { num: 3 };

/**
 * JSDoc comment on ExpandoArrowNamedExport
 */
const ExpandoArrowNamedExport = () => {};
ExpandoArrowNamedExport.args = { num: 3 };
export { ExpandoArrowNamedExport };


//// [declarationEmitExpandoJsdocArrow.js]
/**
 * JSDoc comment on ExpandoArrowInlineNamedExport
 */
export const ExpandoArrowInlineNamedExport = () => { };
ExpandoArrowInlineNamedExport.args = { num: 3 };
/**
 * JSDoc comment on ExpandoArrowNamedExport
 */
const ExpandoArrowNamedExport = () => { };
ExpandoArrowNamedExport.args = { num: 3 };
export { ExpandoArrowNamedExport };


//// [declarationEmitExpandoJsdocArrow.d.ts]
/**
 * JSDoc comment on ExpandoArrowInlineNamedExport
 */
export declare function ExpandoArrowInlineNamedExport(): void;
export declare namespace ExpandoArrowInlineNamedExport {
    var args: {
        num: number;
    };
}
/**
 * JSDoc comment on ExpandoArrowNamedExport
 */
declare function ExpandoArrowNamedExport(): void;
declare namespace ExpandoArrowNamedExport {
    var args: {
        num: number;
    };
}
export { ExpandoArrowNamedExport };
