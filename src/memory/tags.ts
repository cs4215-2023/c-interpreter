export enum TAGS {
  void_tag = 0,
  float_tag = 1,
  int_tag = 2,
  char_tag = 3,
  pointer_tag = 4,
  identifier_tag = 5,
  Unassigned_tag = 6,
  base_pointer_tag = 7
}
export const TYPE_TO_TAG = {
  void: TAGS.void_tag,
  float: TAGS.float_tag,
  char: TAGS.char_tag,
  int: TAGS.int_tag,
  pointer: TAGS.pointer_tag
}

export const TAG_TO_TYPE = {
  '0': 'void',
  '1': 'float',
  '2': 'int',
  '3': 'char',
  '4': 'pointer'
}

export enum MEM_TYPE {
  STACK = 0,
  HEAP = 1
}