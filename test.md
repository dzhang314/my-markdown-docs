# Page Title

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
**Definition: Group**
:::
::: card-body
A ___group___ is an algebraic structure $\alg{G; 1, {}^{-1}, \cdot}$ consisting of:

 * a set $G$, called the ___underlying set___;
 * a distinguished element $1 \in G$, called the ___identity element___;
 * a unary operation ${}^{-1}: G \to G$, written as $x \mapsto x^{-1}$, called ___inversion___;
 * a binary operation $\cdot : G \times G \to G$, written as $(x, y) \mapsto x \cdot y$, called the ___group operation___ or ___group product___;

satisfying the following requirements:

 * ___Associative property___: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ for all $x, y, z \in G$.
 * ___Identity property___: $1 \cdot x = x \cdot 1 = x$ for all $x \in G$.
 * ___Inverse property___: $x \cdot x^{-1} = x^{-1} \cdot x = 1$ for all $x \in G$.
:::
::::::


:::::: card
::: card-header
**Definition: Abelian Group**
:::
::: card-body
An ___abelian group___ is a group $\alg{G; 1, {}^{-1}, \cdot}$ that satisfies the following additional requirement:

 * ___Commutative property___: $x \cdot y = y \cdot x$ for all $x, y \in G$.
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

The same goes for the two multiplication operations $\cdot_F: F \times F \to F$ and $\cdot_V: F \times V \to V$. Moving forward, these operations will be denoted by juxtaposition, as in $ab$ and $a\vv$. The requirement of multiplicative compatibility allows us to write $ab\vv$ without ambiguity, and the identity property allows us to freely insert and omit factors of $1$.

As with groups, rings, and fields, it is common to denote a vector space $\alg{V; \vo_V, -_V, +_V, \cdot_V}$ simply by the name of its underlying set $V$. Thus, we will often say "let $V$ be a vector space over a field $F$."


:::::: card
::: card-header
**Definition: Linear Combination**
:::
::: card-body
Let $V$ be a vector space over a field $F$, and let $n \in \N$. A ___linear combination___ of a finite collection of vectors $\vv_1, \vv_2, \dots, \vv_n \in V$ is a vector of the form

$$ a_1 \vv_1 + a_2 \vv_2 + \cdots + a_n \vv_n $$

where $a_1, a_2, \dots, a_n \in F$. We call the scalars $a_1, a_2, \dots, a_n$ the ___coefficients___ of the linear combination. If $n = 0$, we define the unique linear combination of an empty collection of vectors to be $\vo$.
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
**Definition: Real Vector Space, Complex Vector Space**
:::
::: card-body
A ___real vector space___ is a vector space over the field $\R$ of real numbers. Similarly, a ___complex vector space___ is a vector space over the field $\C$ of complex numbers.
:::
::::::
