# Notes on Topology {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



:::::: card
::: card-header
**Definition: Pseudometric, Symmetry, Triangle Inequality**
:::
::: card-body
Let $X$ be a set, and let $F$ be an ordered field. An $F$-valued ___pseudometric___ on $X$ is a function $d: X \times X \to F$ that satisfies the following requirements:

 * $d(x, x) = 0_F$ for all $x \in X$.
 * ___Symmetry___: $d(x, y) = d(y, x)$ for all $x, y \in X$.
 * ___Triangle inequality___: $d(x, z) \le d(x, y) + d(y, z)$ for all $x, y, z \in X$.
:::
::::::

When the ordered field $F$ is not explicitly specified, it is usually assumed to be the ordered field $\R$ of real numbers.

:::::: card
::: card-header
**Pseudometrics are Nonnegative**
:::
::: card-body
**Theorem:** Let $X$ be a set, let $F$ be an ordered field, and let $d: X \times X \to F$ be an $F$-valued pseudometric on $X$. For all $x, y \in X$, we have $d(x, y) \ge 0_F$.
:::
------
::: card-body
*Proof:* Let $x, y \in X$ be given. By the defining properties of a pseudometric, we have

$$ 0_F = d(x, x) \le d(x, y) + d(y, x) = 2_F d(x, y) $$

which implies that $d(x, y) \ge 0_F$. (Note that $2_F \ne 0_F$ in all ordered fields $F$.) &qed;
:::
::::::

:::::: card
::: card-header
**Definition: Metric, Distance Function, Positivity**
:::
::: card-body
Let $X$ be a set, and let $F$ be an ordered field. An $F$-valued ___metric___ on $X$, also known as an $F$-valued ___distance function___ on $X$, is an $F$-valued pseudometric $d: X \times X \to F$ that satisfies the following additional requirement:

 * ___Positivity___: For all $x, y \in X$, if $d(x, y) = 0_F$, then $x = y$.
:::
::::::

In other words, the only difference between a pseudometric and a metric is that a pseudometric is allowed to assign an distance of zero to two distinct points, while a metric must assign positive distances between distinct points.

:::::: card
::: card-header
**Definition: Generalized Pseudometric Space, Underlying Set, Distance Field, Point**
:::
::: card-body
A ___generalized pseudometric space___ is an ordered triple $(X, F, d)$ consisting of a set $X$, called the ___underlying set___, an ordered field $F$, called the ___distance field___, and an $F$-valued pseudometric $d$ on $X$. The elements of $X$ are called ___points___.
:::
::::::

:::::: card
::: card-header
**Definition: Open Ball, $B_r(x)$, Closed Ball, $B_r[x]$**
:::
::: card-body
Let $(X, F, d)$ be a generalized pseudometric space, $x \in X$, and $r \in F$. The ___open ball___ of radius $r$ centered at $x$, denoted by $B_r(x)$, is the subset of $X$ defined by

$$ B_r(x) \coloneqq \{ y \in X : d(x, y) < r \}. $$

Similarly, the ___closed ball___ of radius $r$ centered at $x$, denoted by $B_r[x]$, is the subset of $X$ defined by

$$ B_r[x] \coloneqq \{ y \in X : d(x, y) \le r \}. $$
:::
::::::

:::::: card
::: card-header
**Definition: Continuous at a Point, Everywhere Continuous, Continuous**
:::
::: card-body
Let $(X, F_X, d_X)$ and $(Y, F_Y, d_Y)$ be generalized pseudometric spaces. A function $f: X \to Y$ is ___continuous at a point___ $x_0 \in X$ if, for every $\varepsilon > 0_{F_Y}$, there exists $\delta > 0_{F_X}$ such that $f[B_\delta(x_0)] \subseteq B_\varepsilon(f(x_0))$.

We say that $f$ is ___everywhere continuous___, or simply ___continuous___, if $f$ is continuous at every point $x_0 \in X$.
:::
::::::

:::::: card
::: card-header
**Definition: Interior Point, Interior, $A^\circ$, Open Set**
:::
::: card-body
Let $(X, F, d)$ be a generalized pseudometric space, and let $A \subseteq X$. A point $x \in X$ is an ___interior point___ of $A$ if there exists $r > 0_F$ such that $B_r(x) \subseteq A$. The set of all interior points of $A$, denoted by $A^\circ$, is called the ___interior___ of $A$.

$$ A^\circ \coloneqq \{ x \in X : \exists r > 0_F : B_r(x) \subseteq A \} $$

We say that $A$ is ___open___ if every point in $A$ is an interior point of $A$ (i.e., $A \subseteq A^\circ$).
:::
::::::

:::::: card
::: card-header
**Definition: Close, Touches, Closure, $A^\circ$, Closed Set**
:::
::: card-body
Let $(X, F, d)$ be a generalized pseudometric space, and let $A \subseteq X$. A point $x \in X$ is ___close___ to $A$, or ___touches___ $A$, if for every $r > 0_F$, there exists $a \in A$ such that $d(x, a) < r$. The set of all points close to $A$, denoted by $\overline{A}$, is called the ___closure___ of $A$.

$$ \overline{A} \coloneqq \{ x \in X : \forall r > 0_F,\, \exists a \in A : d(x, a) < r \} $$

We say that $A$ is ___closed___ if $A$ contains every point that is close to $A$ (i.e., $\overline{A} \subseteq A$).
:::
::::::

--------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------
