/**
 * @author WMXPY
 * @namespace SemanticVersion
 * @description Compare
 */

import { SemanticVersion } from "./version";

export const compareSemanticVersionString = (left: string, right: string): number => {

    const leftClass: SemanticVersion = SemanticVersion.fromString(left);
    const rightClass: SemanticVersion = SemanticVersion.fromString(right);

    return leftClass.compare(rightClass);
};

export const compareSemanticVersion = (left: SemanticVersion, right: SemanticVersion): number => {

    return left.compare(right);
};
