/**
 * @author WMXPY
 * @namespace SemanticVersion
 * @description Compare
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { compareSemanticVersionString } from "../../src";

describe('Given [Compare] Helper Functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('semantic-version-compare');

    it('should be able to sort string version list', (): void => {

        const list: string[] = [
            "1.1.2",
            "2.0.5",
            "1.7.9",
            "0.0.1",
            "9.1.5",
        ];

        const sortedList: string[] = list.sort(compareSemanticVersionString);

        expect(sortedList).to.be.deep.equal([
            "0.0.1",
            "1.1.2",
            "1.7.9",
            "2.0.5",
            "9.1.5",
        ]);
    });
});
