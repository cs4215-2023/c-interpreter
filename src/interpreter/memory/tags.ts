export enum TAGS {
    void_tag = 0,
    float_tag = 1,
    int_tag = 2,
    char_tag = 3,
    Unassigned_tag = 4,
    Undefined_tag = 5,
    Blockframe_tag = 6,
    Callframe_tag = 7,
    Closure_tag = 8,
    Frame_tag = 9,  // 0000 1001
    Environment_tag = 10, // 0000 1010
    Pair_tag = 11,
    Builtin_tag = 12,
}