# Notes on Topology {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



# Introduction

:::::: card
::: card-header
**Definition: Topology**
:::
::: card-body
Let $X$ be a set. A ___topology___ on $X$ is a collection $T \subseteq \powerset{X}$ of subsets of $X$ that satisfies the following requirements:

 * ___Empty set is open___: $\varnothing \in T$.
 * ___Whole set is open___: $X \in T$.
 * ___Closed under arbitrary unions___: If $S \subseteq T$, then $\bigcup S \in T$.
 * ___Closed under finite intersections___: If $S \subseteq T$ and $\abs{S}$ is finite, then $\bigcap S \in T$.
:::
::::::

:::::: card
::: card-header
**Definition: Topological Space, Point, Open Set**
:::
::: card-body
A ___topological space___ is an ordered pair $(X, T)$ consisting of a set $X$, called the ___underlying set___, and a topology $T$ on $X$. The elements of $X$ are called the ___points___ of the topological space $(X, T)$, and the elements of $T$ are called its ___open sets___.
:::
::::::

:::::: card
::: card-header
**Definition: Closed Set**
:::
::: card-body
Let $(X, T)$ be a topological space. A subset $F \subseteq X$ is ___closed___ if $X \setminus F \in T$.
:::
::::::

In other words, a set is closed if and only if its complement is open. Because taking complements is an involution (i.e., $X \setminus (X \setminus A) = A$ for all $A \subseteq X$), the converse is also true: a set is open if and only if its complement is closed.

Note that, in topology, **"open" and "closed" are not opposites!** It is possible for a set to be both open and closed, and it is also possible for a set to be neither. In fact, there is a special name for sets that are both open and closed.

:::::: card
::: card-header
**Definition: Clopen Set**
:::
::: card-body
Let $(X, T)$ be a topological space. A subset of $X$ is ___clopen___ if it is both open and closed.
:::
::::::

Every topological space $(X, T)$ has at least two clopen sets: the empty set $\varnothing$ and the set $X$ itself.

:::::: card
::: card-header
**Definition: Metric, Distance Function, Symmetry, Triangle Inequality**
:::
::: card-body
Let $X$ be a set. A ___metric___ on $X$, also known as a ___distance function___ on $X$, is a function $d: X \times X \to \R$ that satisfies the following requirements:

 * ___Positive-definiteness___: For all $x, y \in X$, we have $d(x, y) \ge 0$, with $d(x, y) = 0$ if and only if $x = y$.
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
