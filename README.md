# Clang-slang

C language modified from js-slang.

# Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Documentation](#documentation)
- [Requirements](#requirements-1)
- [Testing](#testing)
- [Error messages](#error-messages)
- [Using your xx-slang in your local Source Academy](#using-your-xx-slang-in-your-local-source-academy)
- [Talks and Presentations](#talks-and-presentations)
- [License](#license)

# Requirements

- node: known working version: v16.14.0

# Usage

To build,

```{.}
$ git clone https://github.com/cs4215-2023/c-interpreter
$ cd c-interpreter
$ yarn
$ yarn build
```

To add \"Clang-slang\" to your PATH, build it as per the above instructions, then
run

```{.}
$ cd dist
$ npm link
```

To try out _Clang-slang_ in a REPL, assuming you're in the main directory of the repository,

```{.}
$ cd examples
$ chmod +x tester.sh // enables the executable
$ ./tester.sh test.in
```

# Testing

`clang-slang` comes with an extensive test suite. To run the tests after you made
your modifications, run `yarn test`. Regression tests are run automatically when
you want to push changes to this repository. The regression tests are generated
using `jest` and stored as snapshots in `src/\_\_tests\_\_`. After modifying
`clang-slang`, carefully inspect any failing regression tests reported in red in
the command line.


