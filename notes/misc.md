# Miscellaneous Thoughts {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

:::::: card
::: card-header
**Definition: Empty Set, $\varnothing$**
:::
::: card-body
The ___empty set___, denoted by $\varnothing$, is the set that contains no elements at all.
:::
::::::

In other words, $x \notin \varnothing$ for all $x$.

:::::: card
::: card-header
**Definition: Metric, Distance Function, Symmetry, Triangle Inequality**
:::
::: card-body
Let $X$ be a set. A ___metric___ on $X$, also known as a ___distance function___ on $X$, is a function $d: X \times X \to \R$ that satisfies the following requirements:

 * ___Positive-definiteness___: For all $x, y \in X$, we have $d(x, y) = 0$ if and only if $x = y$.
 * ___Symmetry___: $d(x, y) = d(y, x)$ for all $x, y \in X$.
 * ___Triangle inequality___: $d(x, z) \le d(x, y) + d(y, z)$ for all $x, y, z \in X$.
:::
::::::

:::::: card
::: card-header
**Definition: Metric Space, Underlying Set, Point**
:::
::: card-body
A ___metric space___ is an ordered pair $(X, d)$ consisting of a set $X$, called the ___underlying set___ of the metric space, and a metric $d$ on $X$. The elements of $X$ are called the ___points___ of the metric space.
:::
::::::

:::::: card
::: card-header
**Definition: Open Ball**
:::
::: card-body
Let $(X, d)$ be a metric space, $x_0 \in X$, and $r \in \R$. The ___open ball___ of radius $r$ centered at $x_0$, denoted by $B_r(x_0)$, is the subset of $X$ defined by
$$ B_r(x_0) \coloneqq \{ x \in X : d(x, x_0) < r \}. $$
:::
::::::


:::::: card
::: card-header
**Definition: Rng**
:::
::: card-body
A ___rng___ (pronounced as "rung") is an algebraic structure $\alg{R; 0, -, +, \cdot}$ consisting of:

 * a set $R$, called the ___underlying set___;
 * a distinguished element $0 \in R$, called the ___zero element___;
 * a unary operation $-: R \to R$, written as $x \mapsto -x$, called ___negation___;
 * a binary operation $+: R \times R \to R$, written as $(x, y) \mapsto x + y$, called ___addition___;
 * a binary operation $\cdot: R \times R \to R$, written as $(x, y) \mapsto x \cdot y$, called ___multiplication___;

satisfying the following requirements:

 * ___Additive structure___: $\alg{R; 0, -, +}$ is an abelian group.
 * ___Associativity___: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ for all $x, y, z \in R$.
 * ___Left distributivity___: $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$ for all $x, y, z \in R$.
 * ___Right distributivity___: $(x + y) \cdot z = (x \cdot z) + (y \cdot z)$ for all $x, y, z \in R$.
:::
::::::


:::::: card
::: card-header
**Definition: Commutative Rng**
:::
::: card-body
A ___commutative rng___ is a rng $\alg{R; 0, -, +, \cdot}$ that satisfies the following additional requirement:

* ___Commutativity___: $x \cdot y = y \cdot x$ for all $x, y \in R$.
:::
::::::

The word "commutative" in the term "commutative rng" emphasizes that the *multiplication* operation is commutative. By definition, the addition operation is always commutative in every rng.


:::::: card
::: card-header
**Definition: Ring**
:::
::: card-body
A ___ring___ is an algebraic structure $\alg{R; 0, 1, -, +, \cdot}$ consisting of:

 * a set $R$, called the ___underlying set___;
 * a distinguished element $0 \in R$, called the ___zero element___;
 * a distinguished element $1 \in R$, called the ___identity element___;
 * a unary operation $-: R \to R$, written as $x \mapsto -x$, called ___negation___;
 * a binary operation $+: R \times R \to R$, written as $(x, y) \mapsto x + y$, called ___addition___;
 * a binary operation $\cdot: R \times R \to R$, written as $(x, y) \mapsto x \cdot y$, called ___multiplication___;

satisfying the following requirements:

 * ___Rng structure___: $\alg{R; 0, -, +, \cdot}$ is a rng.
 * ___Identity___: $1 \cdot x = x \cdot 1 = x$ for all $x \in R$.
:::
::::::


:::::: card
::: card-header
**Definition: Field**
:::
::: card-body
A ___field___ is a commutative ring $\alg{K; 0, 1, -, +, \cdot}$ that satisfies the following additional requirements:

 * ___Nontriviality___: $0 \ne 1$.
 * ___Invertibility___: Every element of $K \setminus \{0\}$ has a two-sided inverse, i.e., $K^\times = K \setminus \{0\}$.
:::
::::::

In abstract algebra, it is common to use the letters $F$ and $K$ to denote an arbitrary field. The letter $K$ comes from "Körper," the German word for "field."
