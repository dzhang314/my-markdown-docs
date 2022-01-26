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

 * For all $x, y \in X$, we have $d(x, y) = 0$ if and only if $x = y$.
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
