# Notes on Programming in Legion {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

--------------------------------------------------------------------------------

Construct a region $R = I \times F$ from an index space $I$ and a field space $F$:

<pre class="bg-light"><code>
    LogicalRegion rt-><b class="func-name">create_logical_region</b>(*, <b class="arg">IndexSpace I</b>, <b class="arg">FieldSpace F</b>);

</code></pre>


This function takes an optional argument `bool task_local = false`. (**TODO:** What does this argument do?)

--------------------------------------------------------------------------------

```
* Create a new top-level index space based on the given domain bounds
* If the bounds contains a Realm index space then Legion will take ownership of any sparsity maps.
* @param bounds the bounds for the new index space
* @param type_tag optional type tag to use for the index space
IndexSpace create_index_space(*, const Domain &bounds, TypeTag type_tag = 0);
IndexSpaceT<DIM, COORD_T> create_index_space(*, const Rect<DIM, COORD_T> &bounds);
IndexSpaceT<DIM, COORD_T> create_index_space(*, const DomainT<DIM, COORD_T> &bounds);

* Create a new top-level index space from a future which contains a Domain object.
* If the Domain conaints a Realm index space then Legion will take ownership of any sparsity maps.
* @param dimensions number of dimensions for the created space
* @param future the future value containing the bounds
* @param type_tag optional type tag to use for the index space; defaults to 'coord_t'
IndexSpace create_index_space(*, size_t dimensions, const Future &f, TypeTag type_tag = 0);
IndexSpaceT<DIM,COORD_T> create_index_space(*, const Future &f);
```

```
* Create a new top-level index space from a vector of points
* @param points a vector of points to have in the index space
IndexSpace create_index_space(*, const std::vector<DomainPoint> &points);
IndexSpaceT<DIM, COORD_T> create_index_space(*, const std::vector<Point<DIM, COORD_T>> &points);
```

```
* Create a new top-level index space from a vector of rectangles
* @param rects a vector of rectangles to have in the index space
IndexSpace create_index_space(*, const std::vector<Domain> &rects);
IndexSpaceT<DIM, COORD_T> create_index_space(*, const std::vector<Rect<DIM, COORD_T>> &rects);
```

--------------------------------------------------------------------------------

### Resource Management

In C, every call to `malloc` should be matched with a corresponding call to `free`. Similarly, in Legion, every runtime call of the form `create_*` should be matched with a corresponding `destroy_*` call.

<pre class="bg-light"><code>
    <b class="return-type">void</b> rt-><b class="func-name">destroy_index_space</b>(*, <b class="arg">IndexSpace I</b>);
    <b class="return-type">void</b> rt-><b class="func-name">destroy_index_partition</b>(*, <b class="arg">IndexPartition P</b>);
    <b class="return-type">void</b> rt-><b class="func-name">destroy_field_space</b>(*, <b class="arg">FieldSpace F</b>);
    <b class="return-type">void</b> rt-><b class="func-name">destroy_logical_region</b>(*, <b class="arg">LogicalRegion R</b>);

</code></pre>

All of the above `destroy_*` methods in Legion take an optional `bool unordered = false` parameter. Setting `unordered = true` informs Legion that this call to `destroy_*` may occur simultaneously with use of the resource being destroyed. This is necessary when the call to `destroy_*` is performed by a thread other than the one using the resource being destroyed, e.g., a garbage collector. In addition, `destroy_index_space` and `destroy_index_partition` take another optional parameter `bool recurse = true` that controls whether subspaces of the given index space $I$ (i.e., children of $I$ in the index tree) should also be destroyed.

### Reference Counting

<pre class="bg-light"><code>
    <b class="return-type">void</b> rt-><b class="func-name">create_shared_ownership</b>(*, <b class="arg">IndexSpace I</b>);
    <b class="return-type">void</b> rt-><b class="func-name">create_shared_ownership</b>(*, <b class="arg">IndexPartition P</b>);
    <b class="return-type">void</b> rt-><b class="func-name">create_shared_ownership</b>(*, <b class="arg">FieldSpace F</b>);
    <b class="return-type">void</b> rt-><b class="func-name">create_shared_ownership</b>(*, <b class="arg">LogicalRegion R</b>);

</code></pre>

--------------------------------------------------------------------------------

<pre class="bg-light"><code>
    <b class="return-type">bool</b> rt-><b class="func-name">is_index_partition_disjoint</b>(IndexPartition P);
    <b class="return-type">bool</b> rt-><b class="func-name">is_index_partition_complete</b>(IndexPartition P);
    <b class="return-type">bool</b> rt-><b class="func-name">has_parent_index_partition</b>(IndexSpace I);
    <b class="return-type">size_t</b> rt-><b class="func-name">get_field_size</b>(FieldSpace F, FieldID fid);
    <b class="return-type">void</b> rt-><b class="func-name">get_field_space_fields</b>(FieldSpace F, std::vector&lt;FieldID&gt; &fids);
    <b class="return-type">void</b> rt-><b class="func-name">get_field_space_fields</b>(FieldSpace F, std::set&lt;FieldID&gt; &fids);
    <b class="return-type">bool</b> rt-><b class="func-name">has_parent_logical_partition</b>(LogicalRegion handle);
    <b class="return-type">LogicalRegion</b> rt-><b class="func-name">get_parent_logical_region</b>(LogicalPartition handle);
    <b class="return-type">LogicalPartition</b> rt-><b class="func-name">get_parent_logical_partition</b>(LogicalRegion handle);

</code></pre>

These functions do exactly what you think they do.

--------------------------------------------------------------------------------

`LogicalPartition get_logical_partition(LogicalRegion R, IndexPartition P);`
