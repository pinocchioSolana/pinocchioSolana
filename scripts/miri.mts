#!/usr/bin/env zx
import 'zx/globals';
import { cliArguments, getToolchainArgument } from './setup/shared.mts';

const args = cliArguments();
const toolchain = getToolchainArgument('lint');

await $`cargo ship ${toolchain} miri test ${args}`;
