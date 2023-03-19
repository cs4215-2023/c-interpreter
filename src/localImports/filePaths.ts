import {
  ConsecutiveSlashesInFilePathError,
  IllegalCharInFilePathError,
  InvalidFilePathError
} from '../errors/localImportErrors'

export const nonAlphanumericCharEncoding: Record<string, string> = {
  // While the underscore character is legal in both file paths
  // and function names, it is the only character to be legal
  // in both that is not an alphanumeric character. For simplicity,
  // we handle it the same way as the other non-alphanumeric
  // characters.
  _: '_',
  '/': '$',
  // The following encodings work because we disallow file paths
  // with consecutive slash characters (//). Note that when using
  // the 'replace' or 'replaceAll' functions, the dollar sign ($)
  // takes on a special meaning. As such, to insert a dollar sign,
  // we need to write '$$'. See
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement
  // for more information.
  '.': '$$$$dot$$$$', // '$$dot$$'
  '-': '$$$$dash$$$$' // '$$dash$$'
}

const isAlphanumeric = (char: string): boolean => {
  return /[a-zA-Z0-9]/i.exec(char) !== null
}

/**
 * Validates the given file path, returning an `InvalidFilePathError`
 * if the file path is invalid & `null` otherwise. A file path is
 * valid if it only contains alphanumeric characters and the characters
 * defined in `charEncoding`, and does not contain consecutive slash
 * characters (//).
 *
 * @param filePath The file path to check.
 */
export const validateFilePath = (filePath: string): InvalidFilePathError | null => {
  if (filePath.includes('//')) {
    return new ConsecutiveSlashesInFilePathError(filePath)
  }
  for (const char of filePath) {
    if (isAlphanumeric(char)) {
      continue
    }
    if (char in nonAlphanumericCharEncoding) {
      continue
    }
    return new IllegalCharInFilePathError(filePath)
  }
  return null
}

/**
 * Returns whether a string is a file path. We define a file
 * path to be any string containing the '/' character.
 *
 * @param value The value of the string.
 */
export const isFilePath = (value: string): boolean => {
  return value.includes('/')
}
