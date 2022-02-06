# Notes on Programming in Legion {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>


Construct a region $R = I \times F$:

`LogicalRegion create_logical_region(*, IndexSpace I, FieldSpace F);`

This function takes an optional argument `bool task_local = false`. (**TODO:** What does this argument do?)

`void destroy_index_space(*, IndexSpace I);`
`void destroy_index_partition(*, IndexPartition P);`
`void destroy_field_space(*, FieldSpace F);`
`void destroy_logical_region(*, LogicalRegion R);`

All of the above `destroy_*` methods in Legion take an optional `bool unordered = false` parameter. Setting `unordered = true` informs Legion that this call to `destroy_*` may occur simultaneously with use of the resource being destroyed. This is used when the call to `destroy_*` is performed by a thread other than the one using the resource being destroyed, e.g., a garbage collector. In addition, `destroy_index_space` and `destroy_index_partition` take another optional parameter `bool recurse = true` that controls whether subspaces of the given index space `I` (i.e., children of `I` in the index tree) should also be destroyed.

`bool is_index_partition_disjoint(IndexPartition P);`
`bool is_index_partition_complete(IndexPartition P);`
`bool has_parent_index_partition(IndexSpace I);`
`size_t get_field_size(FieldSpace F, FieldID fid);`
`void get_field_space_fields(FieldSpace F, std::vector<FieldID> &fids);`
`void get_field_space_fields(FieldSpace F, std::set<FieldID> &fids);`

These functions do exactly what you think they do.

`LogicalPartition get_logical_partition(LogicalRegion R, IndexPartition P);`
