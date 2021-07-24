/**
 * @author WMXPY
 * @namespace SemanticVersion
 * @description Version
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SemanticVersion } from "../../src";

describe('Given {SemanticVersion} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('aws-config-config');

    it('should be able to create from string', (): void => {

        const version: SemanticVersion = SemanticVersion.fromString(`1.2.3`);

        expect(version).to.be.instanceof(SemanticVersion);
    });
});
