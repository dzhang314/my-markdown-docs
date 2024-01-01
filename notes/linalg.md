# Notes on Linear Algebra

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

:::::: card
::: card-header
**Definition: Vector Space, Vector, Scalar**
:::
::: card-body
Let $\alg{F; 0, 1, -_F, +_F, \cdot_F}$ be a field. A ___vector space___ over $F$ is an algebraic structure $\alg{V; \vo, -_V, +_V, \cdot_V}$ consisting of:

 * a set $V$, called the ___underlying set___;
 * a distinguished element $\vo \in V$, called the ___zero vector___;
 * a unary operation $-_V: V \to V$, written as $\vv \mapsto -\vv$, called ___vector negation___;
 * a binary operation $+_V: V \times V \to V$, written as $(\vv, \vw) \mapsto \vv + \vw$, called ___vector addition___;
 * a binary operation $\cdot_V: F \times V \to V$, written as $(a, \vv) \mapsto a \cdot \vv$, called ___scalar multiplication___;

satisfying the following requirements:

 * ___Additive structure___: $\alg{V; \vo, -_V, +_V}$ is an abelian group.
 * ___Identity___: $1 \cdot \vv = \vv$ for all $\vv \in V$.
 * ___Multiplicative compatibility___: $(a \cdot b) \cdot \vv = a \cdot (b \cdot \vv)$ for all $a, b \in F$ and $\vv \in V$.
 * ___Left distributivity___: $a \cdot (\vv + \vw) = (a \cdot \vv) + (a \cdot \vw)$ for all $a \in F$ and $\vv, \vw \in V$.
 * ___Right distributivity___: $(a + b) \cdot \vv = (a \cdot \vv) + (b \cdot \vv)$ for all $a, b \in F$ and $\vv \in V$.

The elements of $V$ are called ___vectors___, and the elements of $F$ are called ___scalars___.
:::
::::::

In these notes, we will use boldface upright letters, such as $\vv$ and $\vw$, to denote vectors. On the other hand, scalars will be denoted by italic letters, such as $a$ and $b$. This will allow us to distinguish vector variables from scalar variables at a glance. (This convention is commonly adopted in physics and engineering, but is uncommon in pure mathematics.)

Adopting this convention also provides another benefit: namely, we no longer need to distinguish between the operations of scalar addition $+_F: F \times F \to F$ and vector addition $+_V: V \times V \to V$. Instead, we proceed with the implicit understanding that whenever the $+$ sign occurs between two scalars, as in $a + b$, it refers to scalar addition. Likewise, whenever it occurs between two vectors, as in $\vv + \vw$, it refers to vector addition.

The same goes for the two multiplication operations $\cdot_F: F \times F \to F$ and $\cdot_V: F \times V \to V$. Moving forward, these operations will be denoted by juxtaposition, as in $ab$ and $a\vv$. The requirement of multiplicative compatibility allows us to write $ab\vv$ without ambiguity, and the identity property allows us to freely insert and remove factors of $1$.

As with groups, rings, and fields, it is common to denote a vector space $\alg{V; \vo_V, -_V, +_V, \cdot_V}$ simply by the name of its underlying set $V$. Thus, we will often say "let $V$ be a vector space over a field $F$."


:::::: card
::: card-header
**Definition: Linear Combination**
:::
::: card-body
Let $V$ be a vector space over a field $F$, and let $n \in \N$. A ___linear combination___ of a finite sequence of vectors $\vv_1, \vv_2, \dots, \vv_n \in V$ is a vector of the form

$$ a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n $$

where $a_1, a_2, \dots, a_n \in F$. We call the sequence of scalars $a_1, a_2, \dots, a_n$ the ___coefficients___ of the linear combination. For $n = 0$, we define the unique linear combination of the empty sequence of vectors to be $\vo$.
:::
::::::


:::::: card
::: card-header
**Definition: Span**
:::
::: card-body
Let $V$ be a vector space over a field $F$. The ___span___ of a subset $S \subseteq V$, denoted by $\vspan S$, is the set of all linear combinations of all finite sequences of vectors in $S$.

$$ \vspan S \coloneqq \{ a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n : n \in \N,\ a_1, a_2, \dots, a_n \in F,\ \vv_1, \vv_2, \dots, \vv_n \in S \} $$
:::
::::::

Because we defined $\vo$ to be the unique linear combination of an empty set of vectors, we always have $\vo \in \vspan S$ for *any* subset $S \subseteq V$, including the empty set.


:::::: card
::: card-header
**Definition: Linear Subspace**
:::
::: card-body
Let $V$ be a vector space over a field $F$. A ___linear subspace___ of $V$ is a subset $S \subseteq V$ that is closed under taking linear combinations, i.e., every linear combination of every finite sequence of vectors in $S$ is itself in $S$.
:::
::::::

Note that the empty set $\varnothing \subseteq V$ is *not* a linear subspace! The requirement of closure under linear combinations includes the *empty* linear combination, which the empty set fails to satisfy, since $\vo \notin \varnothing$. Because of this requirement, a linear subspace must always contain the zero vector.


:::::: card
::: card-header
**Pairwise Linear Combinations Suffice**
:::
::: card-body
**Theorem:** Let $V$ be a vector space over a field $F$. A subset $S \subseteq V$ is a linear subspace of $V$ if and only if $S$ has the following two properties:

 * ___Contains the zero vector___: $\vo \in S$.
 * ___Closed under pairwise linear combinations___: For all $a, b \in F$ and $\vv, \vw \in S$, we have $a\vv + b\vw \in S$.
:::
------
::: card-body
*Proof sketch:* We prove by induction on $n \in \N$ that $S$ is closed under taking $n$-ary linear combinations. The first property handles the base case $n = 0$, and the second property handles the inductive step, using the fact that an $n$-ary linear combination can be written as a binary linear combination of a vector and an $(n-1)$-ary linear combination. &qed;
:::
::::::


:::::: card
::: card-header
**Definition: Affine Combination**
:::
::: card-body
Let $V$ be a vector space over a field $F$, and let $n \in \N$. An ___affine combination___ of a finite sequence of vectors $\vv_1, \vv_2, \dots, \vv_n \in V$ is a vector of the form $a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n$ where the coefficients $a_1, a_2, \dots, a_n \in F$ satisfy $a_1 + a_2 + \cdots + a_n = 1$.
:::
::::::

Note that, unlike linear combinations, there is no such thing as an empty affine combination. The sum of an empty sequence of scalars is $0$, and by the definition of a field, $0 \ne 1$.


:::::: card
::: card-header
**Definition: Affine Span, Affine Hull**
:::
::: card-body
Let $V$ be a vector space over a field $F$. The ___affine span___ or ___affine hull___ of a subset $S \subseteq V$, denoted by $\aff S$, is the set of all affine combinations of all finite sequences of vectors in $S$.
:::
::::::


:::::: card
::: card-header
**Definition: Affine Set**
:::
::: card-body
Let $V$ be a vector space over a field $F$. An ___affine set___ in $V$ is a subset $S \subseteq V$ that is closed under taking affine combinations, i.e., every affine combination of every finite sequence of vectors in $S$ is itself in $S$.
:::
::::::

Because there are no empty affine combinations, the empty set $\varnothing \in V$ _does_ (vacuously) qualify as an affine set.


:::::: card
::: card-header
**Definition: Conic Combination**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$, and let $n \in \N$. A ___conic combination___ of a finite sequence of vectors $\vv_1, \vv_2, \dots, \vv_n \in V$ is a vector of the form $a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n$ where the coefficients $a_1, a_2, \dots, a_n \in F$ are all nonnegative, i.e., $a_i \ge 0$ for all $i \in \{1, 2, \dots, n \}$.
:::
::::::


:::::: card
::: card-header
**Definition: Conic Hull**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$. The ___conic hull___ of a set $S \subseteq V$, denoted by $\cone S$, is the set of all conic combinations of all finite sequences of vectors in $S$.
:::
::::::


:::::: card
::: card-header
**Definition: Cone**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$. A ___cone___ in $V$ is a subset $S \subseteq V$ that is closed under scalar multiplication by nonnegative scalars, i.e., if $a \in F$ satisfies $a \ge 0$ and $\vv \in S$, then $a\vv \in S$.
:::
::::::

Note that a cone is not necessarily closed under taking conic combinations!


:::::: card
::: card-header
**Definition: Convex Combination**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$, and let $n \in \N$. A ___convex combination___ of a finite sequence of vectors $\vv_1, \vv_2, \dots, \vv_n \in V$ is a vector of the form $a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n$ where the coefficients $a_1, a_2, \dots, a_n \in F$ satisfy $a_1 + a_2 + \cdots + a_n = 1$ and are all nonnegative, i.e., $a_i \ge 0$ for all $i \in \{1, 2, \dots, n \}$.
:::
::::::


:::::: card
::: card-header
**Definition: Convex Hull**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$. The ___convex hull___ of a set $S \subseteq V$, denoted by $\conv S$, is the set of all convex combinations of all finite sequences of vectors in $S$.
:::
::::::


:::::: card
::: card-header
**Definition: Convex Set**
:::
::: card-body
Let $V$ be a vector space over an ordered field $(F, <)$. A ___convex set___ in $V$ is a subset $S \subseteq V$ that is closed under taking convex combinations, i.e., every convex combination of every finite sequence of vectors in $S$ is itself in $S$.
:::
::::::


:::::: card
::: card-header
**Definition: Real Vector Space, Complex Vector Space**
:::
::: card-body
A ___real vector space___ is a vector space over the field $\R$ of real numbers. Similarly, a ___complex vector space___ is a vector space over the field $\C$ of complex numbers.
:::
::::::
