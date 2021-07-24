/**
 * @author WMXPY
 * @namespace SemanticVersion
 * @description Version
 */

export class SemanticVersion {

    public static fromString(version: string): SemanticVersion {

        const splited: number[] = version.split('.').map(Number);
        if (splited.length !== 3 || isNaN(splited[0]) || isNaN(splited[1]) || isNaN(splited[2])) {
            throw new Error(`[Sudoo-Semantic-Version] Invalid version structure, should be "x.x.x", but got "${version}".`);
        }

        return new SemanticVersion(splited[0], splited[1], splited[2]);
    }

    private readonly _major: number;
    private readonly _minor: number;
    private readonly _patch: number;

    private constructor(major: number, minor: number, patch: number) {

        [this._major, this._minor, this._patch] = [major, minor, patch];
    }

    public get majorVersion(): number {
        return this._major;
    }
    public get minorVersion(): number {
        return this._minor;
    }
    public get patchVersion(): number {
        return this._patch;
    }

    public major(): SemanticVersion {

        return new SemanticVersion(this._major + 1, 0, 0);
    }

    public minor(): SemanticVersion {

        return new SemanticVersion(this._major, this._minor + 1, 0);
    }

    public patch(): SemanticVersion {

        return new SemanticVersion(this._major, this._minor, this._patch + 1);
    }

    public compare(version: SemanticVersion): 1 | 0 | -1 {

        if (this._major > version.majorVersion) {
            return 1;
        }
        if (this._major < version.majorVersion) {
            return -1;
        }

        if (this._minor > version.minorVersion) {
            return 1;
        }
        if (this._minor < version.minorVersion) {
            return -1;
        }

        if (this._patch > version.patchVersion) {
            return 1;
        }
        if (this._patch < version.patchVersion) {
            return -1;
        }

        return 0;
    }

    public isGreaterThan(version: SemanticVersion): boolean {

        return this.compare(version) === 1;
    }

    public isSmallerThan(version: SemanticVersion): boolean {

        return this.compare(version) === -1;
    }

    public equals(version: SemanticVersion): boolean {

        return this.compare(version) === 0;
    }

    public hash(): string {

        return this.toString();
    }

    public toString(): string {

        return `${this._major}.${this._minor}.${this._patch}`;
    }
}
