# Sudoo-Semantic-Version

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Semantic-Version/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Semantic-Version/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Semantic-Version/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Semantic-Version)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fsemantic-version.svg)](https://www.npmjs.com/package/@sudoo/semantic-version)
[![downloads](https://img.shields.io/npm/dm/@sudoo/semantic-version.svg)](https://www.npmjs.com/package/@sudoo/semantic-version)

Semantic Version Support for JS

## Install

```sh
yarn add @sudoo/semantic-version
# Or
npm install @sudoo/semantic-version --save
```

## Usage

```ts
import { SemanticVersion } from "@sudoo/semantic-version";

const version = SemanticVersion.fromString("1.0.0");
```
